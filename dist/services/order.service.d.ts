import type { PrismaClient, Order, Prisma } from "../generated";
import type { IOrderRepository } from "../repositories/order.repository.js";
export interface CreateOrderInput {
    orderItem: {
        productId: number;
        quantity: number;
    }[];
}
export interface FindAllOrderParams {
    page: number;
    limit: number;
    search?: {
        userId?: number;
        minTotal?: number;
        maxTotal?: number;
    };
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}
export interface OrderListResponse {
    orders: Order[];
    total: number;
    totalPages: number;
    currentPage: number;
}
export declare class OrderService {
    private prisma;
    private orderRepo;
    constructor(prisma: PrismaClient, orderRepo: IOrderRepository);
    checkout: (userId: number, data: CreateOrderInput) => Promise<{
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        total: Prisma.Decimal;
    }>;
    getAllOrders: (params: FindAllOrderParams) => Promise<OrderListResponse>;
    getOrderById: (id: string) => Promise<{
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        total: Prisma.Decimal;
    }>;
    deleteOrder: (id: string) => Promise<{
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        total: Prisma.Decimal;
    }>;
    exec: () => Promise<{
        overview: Prisma.GetOrderAggregateType<{
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
        }>;
        byUser: Prisma.PickEnumerable<Prisma.OrderGroupByOutputType, "userId"[] & {
            _sum: {
                total: Prisma.Decimal | null;
            };
            _count: {
                id: number;
            };
        }>[];
    }>;
}
//# sourceMappingURL=order.service.d.ts.map
