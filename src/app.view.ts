import { Options, Vue } from 'vue-class-component'
import { namespace } 	from 'vuex-class';

const html = document.getElementsByTagName("html")[0];
const lang = localStorage.getItem('language') || 'en';

const Authentication	= namespace('authentication');

import Sidebar from "@/components/sidebar/sidebar.component.vue"

@Options({
	components: {
		Sidebar
	}
})
export default class App extends Vue {
	// @ts-ignore-next-line
	@Authentication.Getter('isAuthenticated') private isAuthenticated!: boolean;

	public created() {
		html.setAttribute("lang", lang);
	}
}
