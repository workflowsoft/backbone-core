define([
	'backbone',
	'app'
], function (Backbone, Appflow) {
	Appflow.Collections.Tasks = Backbone.Collection.extend({
		model: Backbone.Model.extend({
			idAttribute: 'Id'
		}),

		initialize: function(initData) {
			this.reset(initData);

			this.on('change', function (el) {
				this.core.observatory.trigger('model_changed', el.toJSON())
			});
		}
	});
});
