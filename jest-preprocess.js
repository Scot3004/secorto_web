const babelOptions = {
  "presets": [
    ["@babel/preset-typescript"],
    [
      "babel-preset-gatsby",
      {
        "reactRuntime": "automatic",
        "targets": {
          "browsers": [">0.25%", "not dead"]
        }
      }
    ]
  ]
}

module.exports = require("babel-jest").default.createTransformer(babelOptions)
