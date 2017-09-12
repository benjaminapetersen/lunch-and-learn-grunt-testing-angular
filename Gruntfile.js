'use strict';

module.exports = function(grunt) {

  let protocol = 'http://',
      host = 'localhost',
      serverPort = 9001,
      // will use when we setup e2e-test
      baseUrl = protocol + host + ':' + serverPort;

  grunt.initConfig({
    // connect server
    // https://github.com/gruntjs/grunt-contrib-connect/blob/master/docs/connect-examples.md
    // start with:
    // grunt connect:<target_server_name>
    // stop with:
    // ps aux | grep grunt
    // kill <pid_of_running_server>
    connect: {
      // defaults, if not provided by targets below
      options: {},
      // grunt connect:app_server
      app_server: {
        options: {
            port: 9001,
            base: 'app'
        }
      },
      // multiple bases via combine, so we can serve out
      // dependencies from node modules
      app_with_dependencies: {
        options: {
          keepalive: true,
          port: 9001,
          // last directory in the array is browse-able
          // https://github.com/gruntjs/grunt-contrib-connect#base
          base: ['node_modules', 'app']

        }
      },
      // could run two servers, one for app and dist separately via:
      // grunt connect:app_server
      // grunt connect:dist_server
      dist_server: {
        options: {
          port: 9002,
          base: 'dist'
        }
      },
      // grunt connect:https_server_with_certs
      https_server_with_certs: {
        options: {
          protocol: 'https', // or 'http2'
          port: 8445,
          key: grunt.file.read('tls/server.key').toString(),
          cert: grunt.file.read('tls/server.crt').toString(),
          ca: grunt.file.read('tls/ca.crt').toString()
        },
      }
    },
    karma: {
      options: {
        configFile: 'test/karma.conf.default.js'
      },
      // grunt karma:unit
      unit: {
        singleRun: true
      },
      // grunt karma: continuous
      continuous: {
        background:true
      }
    },
    protractor: {
      options: {
        configFile: 'test/protractor.conf.default.js',
        // stop when fail
        keepAlive: false,
        noColor: false,
        args: {
          suite: grunt.option('suite') || 'all',
          baseUrl: grunt.option('baseUrl') || 'baseUrl'
        }
      },
      // grunt protractor:e2e
      e2e_tests: {
        
      }
    },
    watch: {
      // a special watch task for karma
      // grunt watch:karma
      karma: {
        files: ['app/js/**/*.js', 'test/unit/*.js'],
        // not sure why the :run flag is required?
        tasks: ['karma:continuous:run']
      }
    },
    // run commands
    // https://www.npmjs.com/package/grunt-run
    // run does not operate on "files" like typical tasks.
    // therefore your_target designates a `cmd` with `args`.
    run: {
      options: {
        // Task-specific options go here.
      },
      // grunt run:your_target
      your_target: {
        // use `exec` instead of `cmd` to specify one string
        // like you would type a bash command
        cmd: 'executable',
        args: [
          'arg1',
          'arg2'
        ]
      },
      // grunt run:some_tool
      some_tool: {
        cmd: './my-bash-script.sh'
      }
    }
  });

  // need to load the plugins (via loadNPMTasks...
  // wish it was called 'loadPlugin')
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-protractor-runner');


  grunt.registerTask('serve', ['connect:app_with_dependencies']);

  grunt.registerTask('default', ['serve']);
};
