import { Vue, Options } from 'vue-class-component'

@Options({
	props: {
		text: {
			type: String,
			default: 'Example Text',
			required: false,
			validator(value: String) {
				if (value === '' || value === null || value === undefined) {
					console.warn(`no text set for item`);
					// throw new TypeError(`no text set for item`)
					return false;
				}
				return true;
			},
		},
	},
	components: {

	}
})
export default class ExampleComponent extends Vue {

	private onCreated() {
		console.log('Example Shared Component');
	}
}
