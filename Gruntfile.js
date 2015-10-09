module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //qunit: {
        //    all: {
        //        options: {
        //            timeout: 10000,
        //            console: true,
        //            urls: [
        //                'http://localhost:8000/tests/test.html'
        //            ]
        //        }
        //    }
        //},
        qunit: {
            options: {
                '--web-security': false,
                timeout: 8000,
                console: true
            },
            all: ['tests/test.html']
        },
        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['qunit'],
                options: {
                    spawn: false
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('test', ['qunit']);

    grunt.event.on('qunit.spawn', function (url) {
        grunt.log.ok("Running test: " + url);
    });
    grunt.event.on('qunit.fail.load', function (url) {
        grunt.log.ok("Running test: " + url);
    });
};
