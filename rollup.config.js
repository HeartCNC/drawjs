import {
  terser
} from 'rollup-plugin-terser'
const path = require('path')
const commonjs = require('rollup-plugin-commonjs')
const nodeResolve = require('rollup-plugin-node-resolve')
const replace = require('rollup-plugin-replace')
const buble = require('rollup-plugin-buble')
const typescript = require('rollup-plugin-typescript2')
const cleanup = require('rollup-plugin-cleanup')
const pkgJson = require('./package.json')
const version = pkgJson.version
const name = 'draw'
const moduleName = name.replace(/[a-z]/, (v) => v.toUpperCase())

const banner =
  '/*!\n' +
  ` * ${name}.js v${version}\n` +
  ` * (c) ${new Date().getFullYear()} ${pkgJson.author}\n` +
  ' * Released under the MIT License.\n' +
  ' */'

const resolve = p => {
  return path.resolve(__dirname, './', p)
}

const envs = {
  development: {
    input: resolve('src/index.ts'),
    dest: resolve(`dist/${name}.js`),
    env: 'development',
    format: 'umd',
    banner,
    moduleName: moduleName
  },
  cjs: {
    input: resolve('src/index.ts'),
    dest: resolve(`dist/${name}.cjs.js`),
    env: 'production',
    format: 'cjs',
    banner,
    moduleName: moduleName,
    plugins: [
    ]
  },
  esm: {
    input: resolve('src/index.ts'),
    dest: resolve(`dist/${name}.esm.js`),
    env: 'production',
    format: 'esm',
    banner,
    moduleName: moduleName,
    plugins: [
    ]
  },
  umd: {
    input: resolve('src/index.ts'),
    dest: resolve(`dist/${name}.umd.js`),
    env: 'production',
    format: 'umd',
    banner,
    moduleName: moduleName,
    plugins: [
    ]
  },
  umdMin: {
    input: resolve('src/index.ts'),
    dest: resolve(`dist/${name}.min.js`),
    env: 'production',
    format: 'umd',
    banner,
    moduleName: moduleName,
    plugins: [
      terser()
    ]
  }
}

const placeholder = {
  __VERSION__: version
}

const genConfig = (env) => {
  if (!(env in envs)) {
    throw new Error(env + ': enviroment is error')
  }
  const opt = envs[env]
  const config = {
    input: opt.input,
    output: {
      format: opt.format,
      file: opt.dest,
      banner: opt.banner,
      name: opt.moduleName || name,
      exports: 'named'
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript(),
      replace(placeholder),
      buble(),
      cleanup({
        comments: 'none'
      })
    ].concat(opt.plugins || [])
  }

  return config
}

module.exports = genConfig(process.env.MODE)
