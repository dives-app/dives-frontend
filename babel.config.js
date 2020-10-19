module.exports = {
  presets: ["next/babel"],
  plugins: [
    "babel-plugin-styled-components",
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        root: ["./"],
      },
    ],
  ],
};
