export class User implements IUser {

	constructor(
		public id: number,
		public username = '',
		public name = '',
		public items: number[] = [],
		public onSale: number[] = [],
		public sold: number[] = [],
	) {

	}
}
export interface IUser {
	id: number,
	name: string,
	username: string,
	items: number[],
	onSale: number[],
	sold: number[],
}

export interface IUserLogin {
	username: string,
	password: string,
}

export interface IUserRegister extends IUser {
	password: string,
	passwordRepeat: string,
}

export interface IUserLocalStorage {
	id: number,
	name: string,
	username: string,
}