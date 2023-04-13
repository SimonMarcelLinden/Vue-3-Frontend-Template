export interface Response<T> {
	code	: number;
	detail	: string;
	data	: T;
	localized: {
		title	: string,
		message	: string,
	};
}
