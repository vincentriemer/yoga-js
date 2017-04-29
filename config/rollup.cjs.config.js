import baseConfig from "./rollup.base.config";

export default Object.assign({}, baseConfig, {
  dest: "dist/yogajs.cjs.js",
  format: "cjs",
});
