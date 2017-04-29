import baseConfig from "./rollup.base.config";

export default Object.assign({}, baseConfig, {
  dest: "dist/yogajs.js",
  format: "es",
});
