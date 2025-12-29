import type { PrismaClient, Prisma, Profile } from "../../dist/generated/index.js";
export interface IProfileRepository {
    findAll(skip: number, take: number, where: Prisma.ProfileWhereInput, orderBy: Prisma.ProfileOrderByWithRelationInput): Promise<Profile[]>;
    count(where: Prisma.ProfileWhereInput): Promise<number>;
    findById(id: number): Promise<Profile | null>;
    create(data: Prisma.ProfileCreateInput): Promise<Profile>;
    update(id: number, data: Prisma.ProfileUpdateInput): Promise<Profile>;
    delete(id: number): Promise<Profile>;
}
export declare class ProfileRepository implements IProfileRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(skip: number, take: number, where: Prisma.ProfileWhereInput, orderBy: Prisma.ProfileOrderByWithRelationInput): Promise<{
        name: string;
        id: number;
        userId: number;
        gender: string;
        address: string | null;
        profilePictureUrl: string | null;
    }[]>;
    count(where: Prisma.ProfileWhereInput): Promise<number>;
    findById(id: number): Promise<{
        name: string;
        id: number;
        userId: number;
        gender: string;
        address: string | null;
        profilePictureUrl: string | null;
    } | null>;
    create(data: Prisma.ProfileCreateInput): Promise<{
        name: string;
        id: number;
        userId: number;
        gender: string;
        address: string | null;
        profilePictureUrl: string | null;
    }>;
    update(id: number, data: Prisma.ProfileUpdateInput): Promise<{
        name: string;
        id: number;
        userId: number;
        gender: string;
        address: string | null;
        profilePictureUrl: string | null;
    }>;
    delete(id: number): Promise<{
        name: string;
        id: number;
        userId: number;
        gender: string;
        address: string | null;
        profilePictureUrl: string | null;
    }>;
}
//# sourceMappingURL=profile.repository.d.ts.map
