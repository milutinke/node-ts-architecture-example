import { IUserService } from '../../contracts/user/IUserService';
import { IUserRepository } from '../../contracts/user/IUserRepository';
import { IUser } from '../../contracts/user/IUser';
import { IDummyUserResponse } from '../../contracts/user/response/IDummyUserResponse';

export class UserService implements IUserService {
	private userRepository: IUserRepository;

	constructor(userRepository: IUserRepository) {
		this.userRepository = userRepository;
	}

	register(user: IUser): IDummyUserResponse {
		return this.userRepository.register(user);
	}

	login(user: IUser): IDummyUserResponse {
		return this.userRepository.login(user);
	}

	getInfo(): IDummyUserResponse {
		return this.userRepository.getInfo();
	}
}
