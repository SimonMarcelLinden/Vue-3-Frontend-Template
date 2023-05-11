import { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

/**
 * BeforeEachGuard
 *
 * @param to - The target route being navigated to.
 * @param from - The current route being navigated from.
 * @param next - A function to indicate how to proceed with the navigation.
 * @returns void
 *
 * @author Simon Marcel Linden
 * @since 1.0.0
 */
export function MetadataGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): void {
	// Set meta tags
	// @ts-ignore-next-line
	const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
	// Find the nearest route element with meta tags.
	// @ts-ignore-next-line
	const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
	// @ts-ignore-next-line
	const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if (nearestWithTitle) {
		// @ts-ignore-next-line
		document.title = nearestWithTitle.meta.title;
		// @ts-ignore-next-line
		// document.title = nearestWithTitle['meta']['title'];

	} else if (previousNearestWithMeta) {
		// @ts-ignore-next-line
		document.title = previousNearestWithMeta.meta.title;
	}

	// Remove any stale meta tags from the document using the key attribute we set below.
	// @ts-ignore-next-line
	Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

	// Skip rendering meta tags if there are none.
	if (!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	// @ts-ignore-next-line
	nearestWithMeta.meta.metaTags.map(tagDef => {
		const tag = document.createElement('meta');

		Object.keys(tagDef).forEach(key => {
			tag.setAttribute(key, tagDef[key]);
		});

		// We use this to track which meta tags we create so we don't interfere with other ones.
		// tag.setAttribute('data-vue-router-controlled', '');

		return tag;
	})

	// Add the meta tags to the document head.
	// @ts-ignore-next-line
	.forEach(tag => document.head.appendChild(tag));

	return next();

}
