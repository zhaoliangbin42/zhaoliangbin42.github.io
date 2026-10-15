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
}`;(()=>{const t=document.querySelector(".hero-wave");if(!t)return;const m=matchMedia("(prefers-reduced-motion: reduce)"),e=t.getContext("webgl",{alpha:!1,antialias:!1,powerPreference:"low-power"});if(!e)return;let d=!1,r=0,E=0,l=!0,f=!1,h=!1;const u=[],n=e.createProgram(),v=(t,s)=>{const o=e.createShader(t);return e.shaderSource(o,s),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)?(u.push(o),e.attachShader(n,o),o):(e.deleteShader(o),null)};if(!v(e.VERTEX_SHADER,vertexSource)||!v(e.FRAGMENT_SHADER,fragmentSource)){u.forEach(t=>e.deleteShader(t)),e.deleteProgram(n);return}if(e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){u.forEach(t=>e.deleteShader(t)),e.deleteProgram(n);return}e.useProgram(n);const _=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,_),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const p=e.getAttribLocation(n,"a_position");e.enableVertexAttribArray(p),e.vertexAttribPointer(p,2,e.FLOAT,!1,0,0);const y=e.createTexture();e.bindTexture(e.TEXTURE_2D,y),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR);const w=e.getUniformLocation(n,"u_size"),x=e.getUniformLocation(n,"u_source"),O=e.getUniformLocation(n,"u_phase"),j=e.getUniformLocation(n,"u_focus"),a=new Image;let s=0,i=0,b=.5,c=1;const g=()=>{b=window.innerWidth<=760?.6:.5,c=Math.min(window.devicePixelRatio||1,1.5,(18e5/Math.max(1,s*i))**.5)},C=()=>{if(r=0,d||!f||!l||!s||!i||m.matches||e.isContextLost())return;(t.width!==Math.round(s*c)||t.height!==Math.round(i*c))&&(t.width=Math.round(s*c),t.height=Math.round(i*c)),e.viewport(0,0,t.width,t.height),e.uniform2f(w,s,i),e.uniform1f(j,b),e.uniform1f(O,window.scrollY*.018),e.drawArrays(e.TRIANGLES,0,6),t.dataset.frames=String(++E),t.dataset.scroll=String(Math.round(window.scrollY)),h||(h=!0,t.classList.add("is-ready"))},o=()=>{!d&&l&&!r&&(r=requestAnimationFrame(C))};a.onload=()=>{if(d)return;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,a),e.uniform2f(x,a.naturalWidth,a.naturalHeight),f=!0,o()},a.src="/images/signal/signal-field.webp",window.addEventListener("scroll",o,{passive:!0});const k=new ResizeObserver(([e])=>{s=e.contentRect.width,i=e.contentRect.height,g(),o()});window.addEventListener("resize",()=>{g(),o()},{passive:!0}),k.observe(t);const A=new IntersectionObserver(e=>{l=e[0]?.isIntersecting??!0,l&&o()});A.observe(t),m.addEventListener("change",()=>{m.matches?t.classList.remove("is-ready"):(h=!1,o())}),t.addEventListener("webglcontextlost",e=>{e.preventDefault(),t.classList.remove("is-ready"),cancelAnimationFrame(r),r=0})})()