import type { PrismaClient, User } from "../generated";
export interface IAuthRepository {
    findByEmail(email: string): Promise<User | null>;
    create(data: {
        username: string;
        email: string;
        password_hash: string;
        role: string;
    }): Promise<User>;
}
export declare class AuthRepository implements IAuthRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByEmail(email: string): Promise<User | null>;
    create(data: {
        username: string;
        email: string;
        password_hash: string;
        role: string;
    }): Promise<User>;
}
//# sourceMappingURL=auth.repository.d.ts.map