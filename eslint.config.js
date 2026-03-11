'use strict'

module.exports = [
  { ignores: ['.next/**'] },
  ...require('neostandard')({
    noStyle: true,
  }),
]
