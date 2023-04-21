import { Vue, Options } from 'vue-class-component'
import { watch } from 'vue';

@Options({
	components: {},
})
export default class BreadcrumbComponent extends Vue {
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
			() => this.$route,
			() => {
				this.updateList();
			}
		);
	}

	private updateList (): void {
		this.breadcrumbList = this.$route.meta.breadcrumb
	}
}
