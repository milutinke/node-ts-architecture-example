import { IUserDAO } from '../../contracts/user/IUserDAO';
//import { Connection } from 'mysql';
import { IUser } from '../../contracts/user/IUser';
import DummyUserResponse from '../../response/user/DummyUserResponse';
import { IDummyUserResponse } from '../../contracts/user/response/IDummyUserResponse';

export class UserDAO implements IUserDAO {
	//private connection: Connection;
	private connection: Object; // Dummy

	constructor() {
		//this.connection = DB.connect();
		this.connection = {}; // Dummy
	}

	public register(user: IUser): IDummyUserResponse {
		return DummyUserResponse;
	}

	public login(user: IUser): IDummyUserResponse {
		return DummyUserResponse;
	}

	public getInfo(): IDummyUserResponse {
		return DummyUserResponse;
	}
}
