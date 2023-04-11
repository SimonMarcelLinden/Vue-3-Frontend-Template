module.exports = {
	transpileDependencies	: true,
	lintOnSave				: false,
	css: {
		loaderOptions: {
			css: {
				sourceMap: true,
				modules: false
			},
			sass: {
				sourceMap: true,
				// additionalData: `@import "@/scss/index.scss";`,
				sassOptions: {
					scoped: false // Deaktiviert das Scoped-Verhalten
				},
				implementation: require('node-sass')
			},
			scss: {
				sourceMap: true,
				// additionalData: `@import "@/scss/index.scss";`,
				sassOptions: {
					scoped: false // Deaktiviert das Scoped-Verhalten
				},
				implementation: require('node-sass')
			}
		}
	},
}
