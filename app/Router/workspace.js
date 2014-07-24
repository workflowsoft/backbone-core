define([
	'backbone',
	'app'
], function (Backbone, Appflow) {
	Appflow.Routers.Workspace = Backbone.Router.extend({
	defaultPage: 'index',

    namedParam: /:\w+/g,
    splatParam: /\*\w+/g,
    lastSlashCheck: /\/+$/,
    escapeRegExp: /[-[\]{}()+?.,\\^$|#\s]/g,

		routes: {
			'': 'index',
			'index': 'index',
			':page': 'processWrongRoute'
		},

		initialize: function() {
			this.prevRoute = '';
			this.currentRoute = '';


			this.core
				.set('Index')
		},

		index: function() {
			var url = 'index';

			this.navigate(url);

			this.core
				.unload()
				.render('Index');
		},

		processWrongRoute: function() {
        	this[this.defaultPage]();
    	}
	});
});