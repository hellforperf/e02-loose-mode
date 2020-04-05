/* eslint-env node */
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default [
  // Strict mode
  {
    input: pkg.module,
    output: {
      file: "dist/car.strict.js",
      format: "esm"
    },
    plugins: [
      babel({
        presets: [
          "@babel/preset-env"
        ]
      })
    ]
  },
  // Loose mode!
  {
    input: pkg.module,
    output: {
      file: "dist/car.loose.js",
      format: "esm"
    },
    plugins: [
      babel({
        presets: [
          [
            "@babel/preset-env", {
              loose: true
            }
          ]
        ]
      })
    ]
  }
];
