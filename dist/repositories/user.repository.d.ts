import type { Prisma, PrismaClient, User } from "../../dist/generated/index.js";
export interface IUserRepository {
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    findByUsernameOrEmail(username: string, email: string): Promise<User | null>;
    create(data: {
        username: string;
        email: string;
        password_hash: string;
    }): Promise<User>;
    update(id: number, data: Partial<User>): Promise<User>;
    softDelete(id: number): Promise<User>;
    getStats(): Promise<Prisma.GetUserAggregateType<{
        _count: {
            id: true;
        };
    }>>;
}
export declare class UserRepository implements IUserRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    findByUsernameOrEmail(username: string, email: string): Promise<User | null>;
    create(data: {
        username: string;
        email: string;
        password_hash: string;
    }): Promise<User>;
    update(id: number, data: Partial<User>): Promise<User>;
    softDelete(id: number): Promise<User>;
    getStats(): Promise<Prisma.GetUserAggregateType<{
        _count: {
            id: true;
        };
    }>>;
}
//# sourceMappingURL=user.repository.d.ts.map
