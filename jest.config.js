const path = require("path");

module.exports = {
  roots: [path.resolve(__dirname, "./src")],
  displayName: "sandbox",
  testURL: "http://localhost",
  setupFilesAfterEnv: [path.resolve(__dirname, "./src/setupTests.js")],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
