import { router } from '@/module-loader';
import { Vue } from 'vue-class-component'
import { namespace } from 'vuex-class';

const Authentication 	= namespace('authentication');

const body 				= document.getElementsByTagName("body")[0];

interface Error {
	field	: string | null;
	title	: string | null;
	message	: string | null;
}

interface Credentials {
	email	: string | null;
	password: string | null;
}

export default class Login extends Vue {
	@Authentication.Action('login') 	private login	: any;

	private error: Error = {
		field	: null,
		title	: null,
		message	: null
	};

	private credentials: Credentials = {
		email	: null,
		password: null,
	};

	public created() {
		body.classList.add("background");
	}

	public async handleSignIn() {
		const { email, password } = this.credentials;
		try {
			await this.login(this.credentials)
			router.push('dashboard');
		} catch (error: any) {
			this.error.field 	= Object.keys( error.response.data.data )[0]
			this.error.title 	= error.response.data.detail;
			this.error.message 	= error.response.data.data[this.error.field]['en']['message'];
		}
	}
}
