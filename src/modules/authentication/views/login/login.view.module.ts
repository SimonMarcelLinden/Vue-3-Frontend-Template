import { Vue } from 'vue-class-component'
import { namespace } from 'vuex-class';
import router from '@/router';

const Global 			= namespace('global');
const Authentication 	= namespace('authentication');
const lang 				= localStorage.getItem('language') || 'en';

const body 				= document.getElementsByTagName("body")[0];

export default class Login extends Vue {
	@Global.Action('loading') 			private loading : any
	@Authentication.Action('login') 	private login	: any;

	// @ts-ignore-next-line
	private error: Array = {
		field	: null,
		title	: null,
		message	: null
	};

	// Todo: remove value on finale Version
	private credentials: any = {
		email	: 'admin@schulz-hygiene.de',
		password: 'password',
	};

	public created() {
		body.classList.add("background");
	}

	public async handleSignIn() {
		const { email, password } = this.credentials;
		this.loading(true);

		try {
			await this.login(this.credentials)
			router.replace('/');
		} catch (error: any) {
			this.error.field 	= Object.keys( error.response.data.data )[0]
			this.error.title 	= error.response.data.detail;
			this.error.message 	= error.response.data.data[this.error.field]['en']['message'];
		}

		this.loading(false);
	}
}
