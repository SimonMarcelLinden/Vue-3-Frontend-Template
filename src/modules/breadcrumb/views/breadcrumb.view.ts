import { Options, Vue } from 'vue-class-component'
import { useRoute, RouteMeta  } from 'vue-router';

// import Breadcrumbs from "@/components/shared/ui/bootstrap/breadcrumb/breadcrumb.shared.component.vue"

@Options({
	name: 'BreadcrumbView',
	components: {
		// Breadcrumbs
	}
})
export default class BreadcrumbView extends Vue {
	public meta : RouteMeta | null = this.getMetaInfo();

	private getMetaInfo(): RouteMeta | null {
		return useRoute().meta as RouteMeta | null;
	};
}
