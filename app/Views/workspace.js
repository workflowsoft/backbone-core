define([
	'backbone',
	'app'
], function (Backbone, Appflow) {
	Appflow.Views.Workspace = Backbone.View.extend({
		className: 'l-application-wrapper',
		events: {
		},

		initialize: function() {
			this.core.container = this.$el; 
			this.render();
		},

		render: function() {
			this.$el
				.appendTo($('#l-content'));

			this.core.recalc();
		}
	});
});
