
const notifier = require('node-notifier')
const glob = require('glob')
const join = require('path').join
// const childProcess = require('child_process')
// const isWindows = /^win/.test(process.platform)

export default async function (task) {
  console.log('default: called...')
  notify('default task completed...')
}

export async function compile (task, opts) {
  glob('packages/*', {}, function (er, files) {
    files.forEach((pkg) => {
      let srcPath = join(pkg, 'src', '**/*.js')
      let destDir = join(pkg, 'dist')
      await task.source(opts.src || srcPath).babel().target(destDir, {mode: '0755'})
    })
  })
  notify('Compiled Files...')
}

// notification helper
function notify (msg) {
  return notifier.notify({
    title: '▲ Next',
    message: msg,
    icon: false
  })
}
