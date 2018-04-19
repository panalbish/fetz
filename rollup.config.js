import babel from 'rollup-plugin-babel';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('./package.json'));

export default {
  entry: 'src/index.js',
  exports: 'named',
  external: 'isomorphic-unfetch',
  useStrict: false,
  sourceMap: true,
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  targets: [
    { dest: pkg.main, format: 'cjs' },
    { dest: pkg.module, format: 'es' },
    { dest: pkg['umd:main'], format: 'umd', moduleName: pkg.name }
  ]
};
