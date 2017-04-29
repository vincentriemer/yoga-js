import babel from "rollup-plugin-babel";

export default {
  entry: "src/index.js",
  external: ["yoga-layout"],
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
