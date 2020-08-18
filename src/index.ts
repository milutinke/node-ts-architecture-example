import { UserService } from './service/user/UserService';
import { UserDAO } from './dao/user/UserDAO';
import { UserRepository } from './repository/user/UserRepository';
import { IUser } from './contracts/user/IUser';

const userService: UserService = new UserService(
	new UserRepository(new UserDAO())
);

const userInfo = userService.getInfo();

console.log(
	`User Info:
	First name: ${userInfo.firstName}
	Last name: ${userInfo.lastName}
	Username: ${userInfo.username}
	Email: ${userInfo.email}
	Country: ${userInfo.country}
	Address: ${userInfo.address}
	`
);
