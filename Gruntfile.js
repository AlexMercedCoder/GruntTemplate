module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      js: {
        src: ["src/*.js"],
        dest: "dist/index.js",
      },
    },
    babel: {
      options: {
        sourceMap: false,
        presets: ["@babel/preset-env"],
      },
      dist: {
        files: {
          "dist/index.js": "dist/index.js",
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
    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: "server.js",
        },
      },
    },
    watch: {
      js: {
        files: ["src/*.js"],
        tasks: ["concat", "babel", "uglify"],
      },
      express: {
        files: ["src/*.js"],
        tasks: ["express:dev"],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-express-server");

  grunt.registerTask("default", ["concat", "babel", "uglify"]);
};
