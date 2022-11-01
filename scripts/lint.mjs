import markdownlint from 'markdownlint'

const { readConfigSync } = markdownlint

const options = {
  config: readConfigSync('.markdownlint.json'),
  files: ['README.md']
}

markdownlint(options, function callback (err, result) {
  if (!err) {
    console.log(result.toString())
  }
})
