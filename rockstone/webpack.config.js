const path = require("path");

module.exports = {
  entry: [
    "./js/swipe.js",
    "./js/send-message.js",
    "./js/time.js"
  ],
  
  output: {
    filename: "wp.bundle.js",
    path: path.resolve(__dirname, "bundle"),
    iife: true
  },

  devtool: false
};