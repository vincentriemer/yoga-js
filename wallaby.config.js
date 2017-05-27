module.exports = function(wallaby) {
  return {
    files: ["src/index.js", "YogaNode.js"],
    tests: ["test.js"],
    env: {
      type: "node",
    },
    compilers: {
      "**/*.js": wallaby.compilers.babel(),
    },
  };
};
