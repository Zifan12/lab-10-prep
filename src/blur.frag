#version 120 // glsl version 1.2 for OpenGL 2.1

uniform sampler2D texture;
uniform vec2 windowSize;

void main() {
    vec2 pixel = 1.0 / windowSize;  // size of one screen pixel in uv units
    vec2 uv = gl_TexCoord[0].xy;
    vec4 sum = vec4(0.0);
    // Box filter: average the 5x5 pixels centered on this fragment
    for (int dx = -2; dx <= 2; dx++) {
        for (int dy = -2; dy <= 2; dy++) {
            sum += texture2D(texture, uv + vec2(float(dx), float(dy)) * pixel);
        }
    }
    gl_FragColor = sum / 25.0;
}
