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
		title	: null,
		message	: null
	};

	private credentials: any = {
		email	: '',
		password: '',
	};

	public created() {
		body.classList.add("background");
	}

	public async handleSignIn() {
		const { email, password } = this.credentials;
		this.loading(true);

		if (email && password) {
			this.login(this.credentials)
			.then( () => {
					router.push('/');
				}, (error: any) => {
					this.error = error[lang];
				},
			);
		}
		this.loading(false);
	}
}
