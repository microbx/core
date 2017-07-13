console.log('glob called...')

const glob = require('glob')

// options is optional
glob('packages/*', {}, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.

  files.forEach((pkg) => {
    console.log('pkg: ', pkg)
  })
})
