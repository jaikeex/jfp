import typescript from '@rollup/plugin-typescript';
import packageJson from './package.json' assert { type: 'json' };
import dts from "rollup-plugin-dts";

const EXTERNAL = [...Object.keys(packageJson.peerDependencies)];

export default [{
    input: 'src/index.ts', // Your library's entry point
    output: [
        {
            dir: 'dist', // Output file for ESM format
            format: 'esm'
        },
    ],
    plugins: [
        typescript({
            tsconfig: "tsconfig.build.json"
        })
    ],
    external: [...EXTERNAL]
}];