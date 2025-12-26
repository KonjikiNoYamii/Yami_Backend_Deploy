import type { IUserRepository } from "../repositories/user.repository.js";
import type { User } from "../generated";
export interface IUserService {
    getAllUsers(): Promise<{
        users: User[];
        total: number;
    }>;
    getUserById(id: string): Promise<User>;
    createUser(username: string, email: string, password_hash: string): Promise<User>;
    updateUser(id: string, data: Partial<User>): Promise<User>;
    deleteUser(id: string): Promise<User>;
    exec(): Promise<{
        overview: any;
    }>;
}
export declare class UserService implements IUserService {
    private userRepo;
    constructor(userRepo: IUserRepository);
    getAllUsers(): Promise<{
        users: {
            id: number;
            deletedAt: Date | null;
            username: string;
            email: string;
            password_hash: string;
            role: string;
        }[];
        total: number;
    }>;
    getUserById(id: string): Promise<User>;
    createUser(username: string, email: string, password_hash: string): Promise<User>;
    updateUser(id: string, data: Partial<User>): Promise<User>;
    deleteUser(id: string): Promise<User>;
    exec(): Promise<{
        overview: import("../generated").Prisma.GetUserAggregateType<{
            _count: {
                id: true;
            };
        }>;
    }>;
}
//# sourceMappingURL=user.service.d.ts.map
