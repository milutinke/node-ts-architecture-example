import { IUser } from './IUser';
import { IDummyUserResponse } from './response/IDummyUserResponse';

export interface IUserDAO {
	register(user: IUser): IDummyUserResponse;
	login(user: IUser): IDummyUserResponse;
	getInfo(): IDummyUserResponse;
}
