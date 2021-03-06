import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import multiInput from 'rollup-plugin-multi-input';

import pkg from './package.json';

export default {
    input: ['src/**/*.ts', 'src/**/*.tsx'] ,
    output: {
        format: 'esm' ,
        dir: 'lib' ,
    } ,
    plugins: [
        external() ,
        resolve({
            modulesOnly: true ,
        }) ,
        typescript({
            rollupCommonJSResolveHack: true ,
            exclude: [] ,
            clean: true ,
        }) ,
        commonjs({
            include: ['node_modules/**'] ,
        }) ,
        multiInput()
    ]
};
