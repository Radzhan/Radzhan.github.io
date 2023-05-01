export interface InputBtnI {
	name: string;
	price: string;
	amount: string;
	displayName: string;
	result: string;
}

export interface NamesI {
	name: string;
	price: string;
	amount: string;
	result: string;
	displayName: string;
	id: string;
}

export interface RegisterMutation {
	username: string;
	password: string;
	avatar: File | null;
	displayName: string;
}

export interface User {
	_id: string;
	username: string;
	token: string;
	role: string;
	displayName: string;
	googleId: string | null;
	avatar: string | null;
}

export interface RegisterResponse {
	message: string;
	user: User;
}

export interface ValidationError {
	errors: {
		[key: string]: {
			name: string;
			message: string;
		}
	},
	message: string;
	name: string;
	_name: string;
}

export interface LoginMutation {
	username: string;
	password: string;
}

export interface GlobalError {
	error: string;
}