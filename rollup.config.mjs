import typescript from '@rollup/plugin-typescript';
import packageJson from './package.json' assert { type: 'json' };

const EXTERNAL = [...Object.keys(packageJson.peerDependencies)];

export default [{
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist/esm',
            name: "@jaikeex/jfp",
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        typescript({
            tsconfig: "tsconfig.build.json"
        })
    ],
    external: [...EXTERNAL]
}];