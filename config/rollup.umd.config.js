import baseConfig from "./rollup.base.config";

export default Object.assign({}, baseConfig, {
  dest: "dist/yogajs.umd.js",
  format: "umd",
  moduleName: "YogaJS",
  globals: {
    "yoga-layout": "Yoga",
  },
});
