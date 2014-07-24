define([
	'backbone',
	'app'
], function (Backbone, Appflow) {
	Appflow.Views.Index = Backbone.View.extend({
		events: {
			'click .b-div': 'click',
			'click .b-filtering': 'filter'
		},

		templateUrl: 'Templates/index.html',

		filter: function () {
			this.model.filterData();
		},

		click: function (event) {
			var id = $(event.currentTarget).data('id');

			this.model.incrementId(id);
		},

		initialize: function() {
			this.render();

			this.model.on('filter_ended', this.core.bind(function () {
				this.render();
			}, this));

			this.core.observatory.on('model_changed', this.core.bind(function (event, data) {
				this
					.$('#id' + data.Id)
					.html(data.Value + '<i>' + data.Text + '</i>');
			}, this));
		},

		render: function() {
			this.$el
				.empty()
				.append(this.template(this.model.getData()))
				.appendTo(this.core.container);
		}
	});
});
