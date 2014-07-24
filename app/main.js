require.config({
	paths: {
		handlebars: '../bower_components/handlebars/handlebars',
		jquery: '../bower_components/jquery/dist/jquery',
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone'
	},
	shim: {
	    handlebars: {
	      exports: 'Handlebars'
	    }
  	},
});

require([
	'core',
	'app',
	'Router/workspace',
	'Views/workspace',
	'Views/index',
	'Models/index'
], function ( App, Appflow, Workspace) {
	Appflow.init();
});