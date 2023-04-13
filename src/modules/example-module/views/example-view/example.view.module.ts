import { Vue } from 'vue-class-component'
import { namespace } from 'vuex-class';

const Global 			= namespace('global');

export default class Wxample extends Vue {
	@Global.Action('loading') 			private loading : any

	public created() {

	}
}
