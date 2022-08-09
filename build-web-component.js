const fs = require("fs-extra");
const concat = require("concat");
build = async () => {
  const files = [
    "./dist/angular-web-component-v9/runtime-es2015.js",
    "./dist/angular-web-component-v9/polyfills-es2015.js",
    "./dist/angular-web-component-v9/main-es2015.js",
  ];

  await fs.ensureDir("src/assets");
  await concat(files, "src/assets/angular-web-component.js");
};
build();
