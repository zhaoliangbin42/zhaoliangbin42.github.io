const vertexSource = `
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
  v_uv = (a_position + 1.0) * 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const fragmentSource = `
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
}`;

(() => {
  const canvas = document.querySelector(".hero-wave");
  if (!canvas) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const gl = canvas.getContext("webgl", {
    alpha: false,
    antialias: false,
    powerPreference: "low-power",
  });
  if (!gl) return;
  let disposed = false;
  let frame = 0;
  let frameCount = 0;
  let visible = true;
  let loaded = false;
  let shown = false;
  const shaders = [];
  const program = gl.createProgram();
  const compile = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    shaders.push(shader);
    gl.attachShader(program, shader);
    return shader;
  };
  if (
    !compile(gl.VERTEX_SHADER, vertexSource) ||
    !compile(gl.FRAGMENT_SHADER, fragmentSource)
  ) {
    shaders.forEach((s) => gl.deleteShader(s));
    gl.deleteProgram(program);
    return;
  }
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    shaders.forEach((s) => gl.deleteShader(s));
    gl.deleteProgram(program);
    return;
  }
  gl.useProgram(program);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );
  const position = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  const sizeUniform = gl.getUniformLocation(program, "u_size");
  const sourceUniform = gl.getUniformLocation(program, "u_source");
  const phaseUniform = gl.getUniformLocation(program, "u_phase");
  const focusUniform = gl.getUniformLocation(program, "u_focus");
  const image = new Image();
  const draw = () => {
    frame = 0;
    if (
      disposed ||
      !loaded ||
      !visible ||
      reduced.matches ||
      gl.isContextLost()
    )
      return;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const density = Math.min(window.devicePixelRatio || 1, 1.75);
    if (
      canvas.width !== Math.round(width * density) ||
      canvas.height !== Math.round(height * density)
    ) {
      canvas.width = Math.round(width * density);
      canvas.height = Math.round(height * density);
    }
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(sizeUniform, width, height);
    gl.uniform2f(sourceUniform, image.naturalWidth, image.naturalHeight);
    gl.uniform1f(focusUniform, window.innerWidth <= 760 ? 0.6 : 0.5);
    // Position, not elapsed time, drives phase. With no scroll there are no frames.
    gl.uniform1f(phaseUniform, window.scrollY * 0.018);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    canvas.dataset.frames = String(++frameCount);
    canvas.dataset.scroll = String(Math.round(window.scrollY));
    if (!shown) {
      shown = true;
      canvas.classList.add("is-ready");
    }
  };
  const schedule = () => {
    if (!disposed && visible && !frame) frame = requestAnimationFrame(draw);
  };
  image.onload = () => {
    if (disposed) return;
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    loaded = true;
    schedule();
  };
  image.src = "/images/signal/signal-field.webp";

  window.addEventListener("scroll", schedule, { passive: true });
  const resize = new ResizeObserver(schedule);
  resize.observe(canvas);
  const intersection = new IntersectionObserver((entries) => {
    visible = entries[0]?.isIntersecting ?? true;
    if (visible) schedule();
  });
  intersection.observe(canvas);
  reduced.addEventListener("change", () => {
    if (reduced.matches) canvas.classList.remove("is-ready");
    else {
      shown = false;
      schedule();
    }
  });
  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    canvas.classList.remove("is-ready");
    cancelAnimationFrame(frame);
    frame = 0;
  });
})();
