import babel from "rollup-plugin-babel";

export default {
  entry: "src/index.js",
  external: ["yoga-layout"],
  onwarn: (warning, next) => {
    if (["THIS_IS_UNDEFINED", "EVAL"].indexOf(warning.code) !== -1) return;
    next(warning);
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
