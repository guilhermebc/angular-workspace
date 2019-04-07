const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/tools-app/runtime.js',
    './dist/tools-app/polyfills.js',
    './dist/tools-app/scripts.js',
    './dist/tools-app/main.js',
  ]
  await fs.ensureDir('build')
  await concat(files, 'build/elements.js');
  await fs.copyFile('./dist/tools-app/styles.css', 'build/styles.css')
//   await fs.copy('./dist/tools-app/assets/', 'build/assets/' )

})()