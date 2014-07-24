module.exports = function(grunt) {	
    TEMPLATES_OUTPUT_FILENAME = 'compiled_templates.js'; 


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		handlebars: {
            compile: {
                src: './app/Templates/**/*.html',
                dest: './app/Templates/compiled_templates.js',
                options: {
                    amd: true,
                    namespace: 'templates',
                    processName: function (filePath) {
			          var matches = filePath.split('/');


			          return (matches[matches.length - 2] + '/' + matches[matches.length - 1]);
			        }
                }
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.registerTask('default', 'handlebars'); 
};