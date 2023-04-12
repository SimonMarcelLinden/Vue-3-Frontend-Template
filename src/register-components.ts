import { createApp } from 'vue';

import upperFirst 	from 'lodash/upperFirst'
import camelCase 	from 'lodash/camelCase'

/** Import shared components **/

/**
 *
 * Searches the given directory for files with the file extension *.component.vue or *.component.js.
 * If this property is satisfied, these files are returned.
 *
 * @param
 *
 * @author Simon Marcel Linden
 * @version 1.0
 */
const sharedComponents = require.context(
	// The relative path of the components folder
	'./components/shared',
	// Whether or not to look in subfolders
	true,
	// The regular expression used to match component filenames who starts with "My"
	/[A-Za-z]\w+\.component\.(vue|js)/
);

/**
 * Registers the files stored in the sharedComponents variable as global app components
 * A prefix can be given. The default prefix is 'shared'.
 * The components can thus be used as follows <sharedExample></sharedExample>
 *
 * @param app
 * @param prefix
 *
 * @author Simon Marcel Linden
 * @version 1.0
 */
export function registerComponents(app: ReturnType<typeof createApp>, prefix: String = 'shared.' ): void {
	sharedComponents.keys().forEach((fileName: string) => {
		// Get component config
		const componentConfig = sharedComponents(fileName)

		// Get PascalCase name of component
		const componentName = upperFirst(
			camelCase(
				// Gets the file name regardless of folder depth
				prefix + upperFirst((fileName?.split('/').pop()?.replace(/\.component\.\w+$/, ''))?.replace('.shared', ''))
				// "component." + fileName.split('/').pop().replace(/\.component\.\w+$/, '')
			)
		)

		// Register component globally
		app.component(componentName,
			// Look for the component options on `.default`, which will
			// exist if the component was exported with `export default`,
			// otherwise fall back to module's root.
			componentConfig.default || componentConfig
		)
	});
}
