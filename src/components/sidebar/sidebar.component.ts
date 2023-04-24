import { Vue, Options } from 'vue-class-component'

// const body = document.getElementsByTagName("body")[0];

/**
 *
 * @description Sidebar Component
 *
 * @author Simon Marcel Linden
 * @version 1.0
 */
@Options({
	name		: 'Sidebar',
	props		: {
		'data-target-class'	: { type: String, default: 'sidebar-mobile-open'},
		'data-target'		: { type: String, default: 'application'},
	},
	components	: { }
})
export default class SidebarComponent extends Vue {
	private sidebarRef		: HTMLElement | null = null;
	private dataTargetClass	!: string;
	private dataTarget		!: string;

	/**
	 *
	 * @description Binds the EventListener handleDocumentClick to the Application when the component is mounted
	 * @return	void
	 *
	 * @author Simon Marcel Linden
	 * @version 1.0
	 */
	public mounted(): void {
		this.sidebarRef	= this.$refs.sidebar as HTMLElement;
		document.addEventListener('click', this.handleDocumentClick);
	}

	/**
	 *
	 * @description Removes the handleDocumentClick EventListener before the component is detached from the application
	 * @return	void
	 *
	 * @author Simon Marcel Linden
	 * @version 1.0
	 */
	public beforeUnmount(): void {
		document.removeEventListener('click', this.handleDocumentClick);
	}

	/**
	 *
	 * @description Check if the clicked item is outside the sidebar
	 * @param	event: MouseEvent
	 * @return	void
	 *
	 * @author Simon Marcel Linden
	 * @version 1.0
	 */
	private handleDocumentClick(event: MouseEvent): void {
		let header = document.getElementsByClassName('app-header')[0]

		if (this.sidebarRef && !this.sidebarRef.contains(event.target as Node) && !header.contains(event.target as HTMLElement)) {
			document.getElementsByClassName(this.dataTarget)[0].classList.remove(this.dataTargetClass);
		}
	}

	private handleOpenSub(event: Event): void {
		event.preventDefault();
		const target 		= (event.currentTarget as HTMLElement);
		const targetParent 	= (target.parentElement as HTMLElement);

		targetParent && targetParent.classList.toggle('expand');
	}

	/** Todo: Fill sidebar items dynamically and pay attention to user roles */
}
