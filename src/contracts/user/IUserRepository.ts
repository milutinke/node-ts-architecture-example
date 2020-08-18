import { IUser } from './IUser';
import { IDummyUserResponse } from './response/IDummyUserResponse';

export interface IUserRepository {
	register(user: IUser): IDummyUserResponse;
	login(user: IUser): IDummyUserResponse;
	getInfo(): IDummyUserResponse;
}
