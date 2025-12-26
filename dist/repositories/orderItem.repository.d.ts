import type { Prisma, PrismaClient, OrderItems } from "../generated";
export interface IOrderItemRepository {
    findAll(skip: number, take: number, where: Prisma.OrderItemsWhereInput, orderBy: Prisma.OrderItemsOrderByWithRelationInput): Promise<OrderItems[]>;
    countAll(where: Prisma.OrderItemsWhereInput): Promise<number>;
    findById(id: number): Promise<OrderItems | null>;
    create(data: Prisma.OrderItemsCreateInput): Promise<OrderItems>;
    update(id: number, data: Prisma.OrderItemsUpdateInput): Promise<OrderItems>;
    softDelete(id: number): Promise<OrderItems>;
}
export declare class OrderItemRepository implements IOrderItemRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(skip: number, take: number, where: Prisma.OrderItemsWhereInput, orderBy: Prisma.OrderItemsOrderByWithRelationInput): Prisma.PrismaPromise<({
        product: {
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
        };
        order: {
            id: number;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            total: Prisma.Decimal;
        };
    } & {
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        quantity: number;
        priceAtTime: Prisma.Decimal | null;
    })[]>;
    countAll(where: Prisma.OrderItemsWhereInput): Prisma.PrismaPromise<number>;
    findById(id: number): Prisma.Prisma__OrderItemsClient<({
        product: {
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
        };
        order: {
            id: number;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            total: Prisma.Decimal;
        };
    } & {
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        quantity: number;
        priceAtTime: Prisma.Decimal | null;
    }) | null, null, import("../generated/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    create(data: Prisma.OrderItemsCreateInput): Prisma.Prisma__OrderItemsClient<{
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        quantity: number;
        priceAtTime: Prisma.Decimal | null;
    }, never, import("../generated/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    update(id: number, data: Prisma.OrderItemsUpdateInput): Prisma.Prisma__OrderItemsClient<{
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        quantity: number;
        priceAtTime: Prisma.Decimal | null;
    }, never, import("../generated/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    softDelete(id: number): Prisma.Prisma__OrderItemsClient<{
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        quantity: number;
        priceAtTime: Prisma.Decimal | null;
    }, never, import("../generated/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
}
//# sourceMappingURL=orderItem.repository.d.ts.map