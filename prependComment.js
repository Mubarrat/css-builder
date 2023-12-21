const { readFileSync, writeFileSync } = require('fs')
const compiledJS = readFileSync('./dist/css-builder.js', 'utf8')
writeFileSync(
  './dist/css-builder.js',
  `/*!
 * Css-Builder JavaScript Library v${require('./package.json').version || '1.0.0'}
 * https://github.com/Mubarrat/css-builder/
 * 
 * Released under the MIT license
 * https://github.com/Mubarrat/css-builder/blob/main/LICENSE
 */
${compiledJS}`,
  'utf8'
)
