module.exports = {
  plugins: [
    ["@babel/proposal-decorators", { legacy: true }],
    ["@babel/proposal-class-properties", { loose: true }],
    "@babel/proposal-async-generator-functions",
    "@babel/proposal-object-rest-spread",
    "@babel/plugin-transform-runtime",
  ],
  presets: ["@babel/preset-env", "@babel/typescript"],
};
