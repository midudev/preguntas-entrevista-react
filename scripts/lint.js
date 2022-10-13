const markdownlint = require("markdownlint")

const options = {
  "config": markdownlint.readConfigSync(".markdownlint.json"),
  "files": [ "README.md" ]
}

markdownlint(options, function callback(err, result) {
  if (!err) {
    console.log(result.toString())
  }
})