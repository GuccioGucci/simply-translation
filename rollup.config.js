import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';

export default {
    input: 'src/index.js',
    plugins: [eslint({})],
    output: [{ file: 'dist/index.min.js', format: 'cjs', plugins: [terser()] }],
};
