import { eq, or } from 'drizzle-orm';
import db from '../db';
import { UserEntity, users } from '../db/schema/users';
import { v4 as uuidV4 } from 'uuid';
import { CreateUserType, UserType } from '../zod/schema/User.zod';

export const doesUserExists = async (user: UserType): Promise<boolean | undefined> => {
	try {
		const foundUser = await db
			.select()
			.from(users)
			.where(or(eq(users.username, user.username), eq(users.email, user.email), eq(users.mobile, user.mobile)));
		if (!foundUser[0]) {
			return false;
		}
		return true;
	} catch (error) {}
};

export const getUserById = async (userId: string): Promise<UserEntity> => {
	try {
		const foundUser:Array<UserEntity> = await db.select().from(users).where(eq(users.id, userId));
		if (!foundUser[0]) {
			throw new Error('user not found');
		}
		return foundUser[0];
	} catch (error) {
		throw error;
	}
};

export const getUserByEmail = async (email: string): Promise<UserEntity> => {
	try {
		const foundUser = await db.select().from(users).where(eq(users.email, email));
		if (foundUser[0]) {
			return foundUser[0];
		}
		throw new Error('User not round');
	} catch (error) {
		throw error;
	}
};

export const getUserByUsername = async (username: string) => {
	const foundUser = await db.select().from(users).where(eq(users.username, username));
	if (!foundUser[0]) {
		return false;
	}
	return foundUser[0];
};

export const getUserByUsernameOrEmailOrMobile = async (username: string): Promise<UserEntity> => {
	try {
		const foundUser = await db
			.select()
			.from(users)
			.where(or(eq(users.username, username), eq(users.email, username), eq(users.mobile, username)));
		if (foundUser[0]) {
			return foundUser[0];
		}
		throw new Error('User not round');
	} catch (error) {
		throw error;
	}
};

export const createNewUser = async (user: CreateUserType): Promise<UserEntity> => {
	try {
		const newUser: UserEntity = { ...user, id: uuidV4() };
		const savedUser = await db.insert(users).values(newUser);
		if (savedUser) {
			return newUser;
		} else {
			throw new Error('Failed to create new user.');
		}
	} catch (error) {
		throw error;
	}
};

export const doesUserAlreadyExists = async (user: CreateUserType) => {
	try {
		const exists: boolean[] = [];
		const msg: string[] = [];

		const emailExists = await getUserByEmail(user.email);
		if (!emailExists) {
			exists.push(emailExists);
			msg.push('user with email id already exists');
		}

		const usernameExists = getUserByUsername(user.email);
		if (!usernameExists) {
			exists.push(usernameExists);
			msg.push('user with email id already exists');
		}

		return { exists, msg };
	} catch (error) {
		throw error;
	}
};
