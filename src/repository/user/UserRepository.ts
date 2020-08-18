import { IUserRepository } from '../../contracts/user/IUserRepository';
import { IUserDAO } from '../../contracts/user/IUserDAO';
import { IUser } from '../../contracts/user/IUser';
import { IDummyUserResponse } from '../../contracts/user/response/IDummyUserResponse';

export class UserRepository implements IUserRepository {
	private userDAO: IUserDAO;

	constructor(userDAO: IUserDAO) {
		this.userDAO = userDAO;
	}

	register(user: IUser): IDummyUserResponse {
		return this.userDAO.register(user);
	}

	login(user: IUser): IDummyUserResponse {
		return this.userDAO.login(user);
	}

	getInfo(): IDummyUserResponse {
		return this.userDAO.getInfo();
	}
}
