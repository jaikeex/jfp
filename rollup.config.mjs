import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json' assert { type: 'json' };

const EXTERNAL = [...Object.keys(packageJson.peerDependencies)];

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist/cjs',
        name: '@jaikeex/jfp',
        format: 'cjs',
      },
    ],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.build.json',
      }),
    ],
    external: [...EXTERNAL],
  },
  {
    input: 'dist/cjs/index.d.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'es',
      },
    ],
    plugins: [dts()],
  },
];
