module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-case": [
      1,
      "always",
      ["upper-case", "lower-case", "pascal-case", "start-case"]
    ],
    "subject-case": [1, "always", ["sentence-case", "lower-case", "start-case"]]
  }
};
