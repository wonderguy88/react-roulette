const rewire = require("rewire");
const defaults = rewire("react-scripts/scripts/build.js"); // If you ejected, use this instead: const defaults = rewire('./build.js')
let config = defaults.__get__("config");

config.optimization.splitChunks = {
  cacheGroups: {
    default: false,
  },
};

config.optimization.runtimeChunk = false;

// Renames main.00455bcf.js to main.js
config.output.filename = "static/js/all_in_one_file.js";

// Renames main.b100e6da.css to main.css
config.plugins[5].options.filename = "static/css/somecss.css";
config.plugins[5].options.moduleFilename = () =>
  "static/css/all_in_one_file.css";

//! document
//https://green-box.co.uk/create-a-wordpress-plugin-that-uses-a-react-app/
