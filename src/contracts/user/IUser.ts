import { Stream } from 'stream';

export interface IUser {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	country: string;
	address: string;
	admin: boolean;
}
