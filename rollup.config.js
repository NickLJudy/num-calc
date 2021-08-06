import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

const input = 'src/index.js';
const external = Object.keys(pkg.peerDependencies || {});
const plugins = [];

export default [
  //CommonJS
  {
    input,
    output: { file: 'lib/num-calc.js', format: 'cjs', indent: false },
    external,
    plugins,
  },

  //ESM
  {
    input,
    output: { file: 'esm/num-calc.js', format: 'esm', indent: false },
    external,
    plugins,
  },

  //UMD
  {
    input,
    output: {
      file: 'dist/num-calc.js',
      format: 'umd',
      name: 'num-calc',
      indent: false
    },
    external,
    plugins,
  },

  //UMD Production
  {
    input,
    output: {
      file: 'dist/num-calc.min.js',
      format: 'umd',
      name: 'num-calc',
      indent: false
    },
    external,
    plugins: [
      terser(
        {
          compress: {
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            warnings: false,
          },
        }
      )
    ],
  },
]