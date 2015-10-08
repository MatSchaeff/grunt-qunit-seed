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
            all: 'tests/test.html',
            options: {
                '--web-security': 'no',
                timeout: 80000,
                console: true
            }
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
};
