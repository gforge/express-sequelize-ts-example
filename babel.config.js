module.exports = {
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true,
      },
    ],
    "babel-plugin-inline-import",
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/proposal-class-properties", { loose: true }],
    "@babel/proposal-object-rest-spread",
    "@babel/plugin-proposal-optional-chaining",
    [
      "module-resolver",
      {
        alias: {
          "~": "./src",
        },
      },
    ],
  ],
  presets: ["@babel/preset-env", "@babel/typescript"],
};
