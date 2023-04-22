module.exports = {
    plugins: [
      [
        "@semantic-release/release-notes-generator",
        {
          preset: "angular",
          parserOpts: {
            noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"]
          }
        }
      ]
    ]
  };
  