module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-case": [2, "always", "upper-case"],
    "subject-case": [1, "always", ["sentence-case", "lower-case", "start-case"]]
  }
};
