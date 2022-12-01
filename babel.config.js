module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json", ".svg", ".jpg"],
          alias: {
            "@components": "./src/components",
            "@core": "./src/core",
            "@screens": "./src/screens",
            "@navigation": "./src/navigation",
            "@assets": "./assets",
          },
        },
      ],
    ],
  };
};
