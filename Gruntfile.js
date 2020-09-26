module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    babel: {
      options: {
        sourceMap: false,
        presets: ["@babel/preset-env"],
      },
      dist: {
        files: {
          "dist/index.js": "src/index.js",
        },
      },
    },
    uglify: {
      options: {
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      },
      dist: {
        files: {
          "dist/index.js": ["dist/index.js"],
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-express-server");

  grunt.registerTask("default", ["babel", "uglify"]);
  grunt.registerTask("watch", ["watch"]);
};
