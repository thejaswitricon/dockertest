const fs = require('fs')

// Get the release notes file path
const releaseNotesPath = process.env.SR_RELEASE_NOTES_FILE || './RELEASES.md'

// Read the release notes file
const releaseNotes = fs.readFileSync(releaseNotesPath, 'utf8')

// Get the current version number from the release notes
const currentVersion = releaseNotes.match(/^## \[(\d+\.\d+\.\d+)\]/m)[1]

// Get the folder name from an environment variable
const folderName = process.env.FOLDER_NAME

// Modify the release notes to include the folder name
const modifiedReleaseNotes = releaseNotes.replace(
  `## [${currentVersion}]`,
  `## [${currentVersion}](https://github.com/${process.env.GITHUB_REPOSITORY}/compare/${process.env.SR_PREVIOUS_TAG}...${process.env.SR_NEXT_TAG}) (${new Date().toISOString().split('T')[0]})\n\nFolder name: ${folderName}\n\n## [${currentVersion}]`
)

// Write the modified release notes back to the file
fs.writeFileSync(releaseNotesPath, modifiedReleaseNotes, 'utf8')
