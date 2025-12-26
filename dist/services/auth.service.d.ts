import type { IAuthRepository } from "../repositories/auth.repository.js";
export interface RegisterInput {
    username: string;
    email: string;
    password: string;
    role?: string;
}
export interface LoginInput {
    email: string;
    password: string;
}
export interface IAuthService {
    register(data: RegisterInput): Promise<any>;
    login(data: LoginInput): Promise<any>;
}
export declare class AuthService implements IAuthService {
    private authRepo;
    constructor(authRepo: IAuthRepository);
    register(data: RegisterInput): Promise<{
        email: string;
        username: string;
        role: string;
    }>;
    login(data: LoginInput): Promise<{
        user: {
            email: string;
            username: string;
            role: string;
        };
        token: string;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map
