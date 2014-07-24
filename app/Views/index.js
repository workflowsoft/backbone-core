define([
	'backbone',
	'app'
], function (Backbone, Appflow) {
	Appflow.Views.Index = Backbone.View.extend({
		events: {
		},

		templateUrl: 'Templates/index.html',

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el
				.append(this.template())
				.appendTo(this.core.container);
		}
	});
});
