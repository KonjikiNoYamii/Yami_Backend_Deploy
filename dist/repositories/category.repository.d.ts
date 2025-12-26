import type { PrismaClient, Prisma, Category } from "../generated";
export interface ICategoryRepository {
    findAll(skip: number, take: number, where: Prisma.CategoryWhereInput, orderBy: Prisma.CategoryOrderByWithRelationInput): Promise<Category[]>;
    count(where: Prisma.CategoryWhereInput): Promise<number>;
    findById(id: number): Promise<Category | null>;
    findByName(name: string): Promise<Category | null>;
    create(name: string): Promise<Category>;
    update(id: number, data: Prisma.CategoryUpdateInput): Promise<Category>;
    softDelete(id: number): Promise<Category>;
}
export declare class CategoryRepository implements ICategoryRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(skip: number, take: number, where: Prisma.CategoryWhereInput, orderBy: Prisma.CategoryOrderByWithRelationInput): Promise<({
        products: {
            name: string;
            id: number;
            deletedAt: Date | null;
            description: string | null;
            price: Prisma.Decimal;
            stock: number;
            image: string;
            categoryId: number | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        name: string;
        id: number;
        deletedAt: Date | null;
    })[]>;
    count(where: Prisma.CategoryWhereInput): Promise<number>;
    findById(id: number): Promise<{
        name: string;
        id: number;
        deletedAt: Date | null;
    } | null>;
    findByName(name: string): Promise<{
        name: string;
        id: number;
        deletedAt: Date | null;
    } | null>;
    create(name: string): Promise<{
        name: string;
        id: number;
        deletedAt: Date | null;
    }>;
    update(id: number, data: Prisma.CategoryUpdateInput): Promise<{
        name: string;
        id: number;
        deletedAt: Date | null;
    }>;
    softDelete(id: number): Promise<{
        name: string;
        id: number;
        deletedAt: Date | null;
    }>;
}
//# sourceMappingURL=category.repository.d.ts.map