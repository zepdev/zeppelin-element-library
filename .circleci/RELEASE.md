# Release and NPM publishing

## Release

- The release will be done by the semantic-release package.
- The semantic-release is configured to only run from the master branch.
- The release step only runs on the master branch
- The CI runner for the deployment is configured to only run when it encounters a new tag.

Please do not publish manually.
