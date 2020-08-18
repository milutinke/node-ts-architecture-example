import { IUser } from "../../contracts/user/IUser";

export class User implements IUser {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	country: string;
	address: string;
	admin: boolean;

	constructor(
		firstName: string,
		lastName: string,
		username: string,
		email: string,
		password: string,
		country: string,
		address: string,
		admin: boolean
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.email = email;
		this.password = password;
		this.country = country;
		this.address = address;
		this.admin = admin;
	}
}
