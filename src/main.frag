#version 120 // glsl version 1.2 for OpenGL 2.1

uniform vec2 windowSize;
uniform vec2 mousePos;
uniform float time;

void main(void) {
    vec2 t = gl_FragCoord.xy / windowSize;
    // Red grows to the right, green grows upward, blue unused
    gl_FragColor = vec4(t.x, t.y, sin(time) * 0.5 + 0.5, 1.0);

    if (distance(gl_FragCoord.xy, mousePos) < 10.0) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
}
