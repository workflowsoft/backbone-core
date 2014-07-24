define([
	'core',
	'Templates/compiled_templates'
], function (App, Templates) {
	var Appflow = new App();

	_.extend(Appflow, {
		recalc: function () {
			// Пример функции, расширяющей "core"
		}
	});

	return Appflow;
});
