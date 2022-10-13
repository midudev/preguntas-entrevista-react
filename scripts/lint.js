const markdownlint = require("markdownlint")

const options = {
  "files": [ "README.md" ]
}

markdownlint(options, function callback(err, result) {
  if (!err) {
    console.log(result.toString())
  }
})