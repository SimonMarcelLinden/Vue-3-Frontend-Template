import { Vue, Options } from 'vue-class-component'
import { watch } from 'vue';

import { Router } from 'vue-router';
import { RouteLocationNormalizedLoaded } from 'vue-router';

@Options({
	name: 'Breadcrumbs',
	components: {},
})
export default class BreadcrumbComponent extends Vue {
	private $router!: Router;
	private breadcrumbList: any = [];

	public mounted(): void {
		this.updateList()
		this.watchRoute();
	}

	private routeTo (event: MouseEvent, to: number): void {
		event.preventDefault();

		if (this.breadcrumbList[to].link)
			this.$router.push(this.breadcrumbList[to].link)
	}

	private watchRoute(): void {
		watch(
			// () => this.$route,
			() => this.$router.currentRoute,
			() => {
				this.updateList();
			}
		);
	}

	private updateList (): void {
		// this.breadcrumbList = this.$route.meta.breadcrumb
		const currentRoute = this.$router.currentRoute.value as RouteLocationNormalizedLoaded;
		this.breadcrumbList = currentRoute.meta?.breadcrumb || [];
	}
}
