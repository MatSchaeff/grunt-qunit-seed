module.exports = function(grunt) {
    grunt.initConfig({
        qunit: {
            options: {
                timeout: 10000
            },
            all: ['tests/**/*.html']
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
