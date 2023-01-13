'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const trim = function({ raws }) {
  if (raws.before) raws.before = '\n'
  if (raws.after) raws.after = '\n'
}
const pluginFn = () => ({
  postcssPlugin: 'trim',
  AtRule: trim,
  Rule: trim
})
pluginFn.postcss = true
exports.default = pluginFn
