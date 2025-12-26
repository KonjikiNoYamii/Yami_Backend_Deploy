import type { Prisma, PrismaClient, Order } from "../generated";
import type { Decimal } from "../generated/runtime/client";
export interface IOrderRepository {
    findProductsForCheckout(productIds: number[], tx: Prisma.TransactionClient): Promise<{
        id: number;
        price: Decimal;
        stock: number;
    }[]>;
    createOrderWithItems(data: Prisma.OrderCreateInput, tx: Prisma.TransactionClient): Promise<Order>;
    decrementStock(productId: number, qty: number, tx: Prisma.TransactionClient): Promise<void>;
    findAll(skip: number, take: number, where: Prisma.OrderWhereInput, orderBy: Prisma.OrderOrderByWithRelationInput): Promise<Order[]>;
    countAll(where: Prisma.OrderWhereInput): Promise<number>;
    findById(id: number): Promise<Order | null>;
    softDelete(id: number): Promise<Order>;
    getStats(): Promise<Prisma.GetOrderAggregateType<{
        _count: {
            id: true;
        };
        _sum: {
            total: true;
        };
        _min: {
            total: true;
        };
        _max: {
            total: true;
        };
    }>>;
    getOrderStatsByUser(): Promise<(Prisma.PickEnumerable<Prisma.OrderGroupByOutputType, "userId"[] & {
        _sum: {
            total: Decimal | null;
        };
        _count: {
            id: number;
        };
    }>[])>;
}
export declare class OrderRepository implements IOrderRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findProductsForCheckout(productIds: number[], tx: Prisma.TransactionClient): Promise<{
        id: number;
        price: Prisma.Decimal;
        stock: number;
    }[]>;
    decrementStock(productId: number, qty: number, tx: Prisma.TransactionClient): Promise<void>;
    createOrderWithItems(data: Prisma.OrderCreateInput, tx: Prisma.TransactionClient): Promise<{
        orderItems: ({
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
        } & {
            id: number;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            orderId: number;
            productId: number;
            quantity: number;
            priceAtTime: Prisma.Decimal | null;
        })[];
        user: {
            id: number;
            deletedAt: Date | null;
            username: string;
            email: string;
            password_hash: string;
            role: string;
        };
    } & {
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        total: Prisma.Decimal;
    }>;
    findAll(skip: number, take: number, where: Prisma.OrderWhereInput, orderBy: Prisma.OrderOrderByWithRelationInput): Promise<({
        orderItems: {
            id: number;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            orderId: number;
            productId: number;
            quantity: number;
            priceAtTime: Prisma.Decimal | null;
        }[];
        user: {
            id: number;
            deletedAt: Date | null;
            username: string;
            email: string;
            password_hash: string;
            role: string;
        };
    } & {
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        total: Prisma.Decimal;
    })[]>;
    countAll(where: Prisma.OrderWhereInput): Promise<number>;
    findById(id: number): Promise<({
        orderItems: ({
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
        } & {
            id: number;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            orderId: number;
            productId: number;
            quantity: number;
            priceAtTime: Prisma.Decimal | null;
        })[];
        user: {
            id: number;
            deletedAt: Date | null;
            username: string;
            email: string;
            password_hash: string;
            role: string;
        };
    } & {
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        total: Prisma.Decimal;
    }) | null>;
    softDelete(id: number): Promise<{
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        total: Prisma.Decimal;
    }>;
    getStats(): Promise<Prisma.GetOrderAggregateType<{
        _count: {
            id: true;
        };
        _sum: {
            total: true;
        };
        _min: {
            total: true;
        };
        _max: {
            total: true;
        };
    }>>;
    getOrderStatsByUser(): Promise<(Prisma.PickEnumerable<Prisma.OrderGroupByOutputType, "userId"[]> & {
        _count: {
            id: number;
        };
        _sum: {
            total: Prisma.Decimal | null;
        };
    })[]>;
}
//# sourceMappingURL=order.repository.d.ts.map