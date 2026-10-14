const vertexSource=`
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
  v_uv = (a_position + 1.0) * 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`,fragmentSource=`
precision mediump float;
uniform sampler2D u_image;
uniform vec2 u_size;
uniform vec2 u_source;
uniform float u_phase;
uniform float u_focus;
varying vec2 v_uv;
void main() {
  vec2 uv = v_uv;
  float canvasAspect = u_size.x / u_size.y;
  float sourceAspect = u_source.x / u_source.y;
  if (canvasAspect < sourceAspect) {
    float crop = canvasAspect / sourceAspect;
    uv.x = (uv.x - 0.5) * crop + 0.5 + (u_focus - 0.5) * (1.0 - crop);
  } else {
    uv.y = (uv.y - 0.5) * sourceAspect / canvasAspect + 0.5;
  }
  float edge = smoothstep(0.0, 0.12, uv.x) * smoothstep(0.0, 0.12, 1.0 - uv.x)
             * smoothstep(0.0, 0.12, uv.y) * smoothstep(0.0, 0.12, 1.0 - uv.y);
  float safeArea = 0.4 + 0.6 * smoothstep(0.18, 0.9, uv.x + (1.0 - uv.y) * 0.5);
  float wave = (sin(uv.x * 11.0 + u_phase) - sin(uv.x * 11.0)) * 0.018;
  float ripple = (sin(uv.y * 16.0 - u_phase * 0.65) - sin(uv.y * 16.0)) * 0.006;
  uv.y += wave * edge * safeArea;
  uv.x += ripple * edge;
  gl_FragColor = texture2D(u_image, clamp(uv, 0.001, 0.999));
}`;(()=>{const t=document.querySelector(".hero-wave");if(!t)return;const d=matchMedia("(prefers-reduced-motion: reduce)"),e=t.getContext("webgl",{alpha:!1,antialias:!1,powerPreference:"low-power"});if(!e)return;let r=!1,o=0,_=0,a=!0,u=!1,c=!1;const l=[],n=e.createProgram(),h=(t,s)=>{const o=e.createShader(t);return e.shaderSource(o,s),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)?(l.push(o),e.attachShader(n,o),o):(e.deleteShader(o),null)};if(!h(e.VERTEX_SHADER,vertexSource)||!h(e.FRAGMENT_SHADER,fragmentSource)){l.forEach(t=>e.deleteShader(t)),e.deleteProgram(n);return}if(e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){l.forEach(t=>e.deleteShader(t)),e.deleteProgram(n);return}e.useProgram(n);const f=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,f),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const m=e.getAttribLocation(n,"a_position");e.enableVertexAttribArray(m),e.vertexAttribPointer(m,2,e.FLOAT,!1,0,0);const j=e.createTexture();e.bindTexture(e.TEXTURE_2D,j),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR);const p=e.getUniformLocation(n,"u_size"),g=e.getUniformLocation(n,"u_source"),v=e.getUniformLocation(n,"u_phase"),b=e.getUniformLocation(n,"u_focus"),s=new Image,y=()=>{if(o=0,r||!u||!a||d.matches||e.isContextLost())return;const i=t.clientWidth,l=t.clientHeight,n=Math.min(window.devicePixelRatio||1,1.75);(t.width!==Math.round(i*n)||t.height!==Math.round(l*n))&&(t.width=Math.round(i*n),t.height=Math.round(l*n)),e.viewport(0,0,t.width,t.height),e.uniform2f(p,i,l),e.uniform2f(g,s.naturalWidth,s.naturalHeight),e.uniform1f(b,window.innerWidth<=760?.6:.5),e.uniform1f(v,window.scrollY*.018),e.drawArrays(e.TRIANGLES,0,6),t.dataset.frames=String(++_),t.dataset.scroll=String(Math.round(window.scrollY)),c||(c=!0,t.classList.add("is-ready"))},i=()=>{!r&&a&&!o&&(o=requestAnimationFrame(y))};s.onload=()=>{if(r)return;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,s),u=!0,i()},s.src="/images/signal/signal-field.webp",window.addEventListener("scroll",i,{passive:!0});const w=new ResizeObserver(i);w.observe(t);const O=new IntersectionObserver(e=>{a=e[0]?.isIntersecting??!0,a&&i()});O.observe(t),d.addEventListener("change",()=>{d.matches?t.classList.remove("is-ready"):(c=!1,i())}),t.addEventListener("webglcontextlost",e=>{e.preventDefault(),t.classList.remove("is-ready"),cancelAnimationFrame(o),o=0})})()