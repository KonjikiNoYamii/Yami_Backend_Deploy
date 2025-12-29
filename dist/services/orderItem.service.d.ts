import type { Prisma, OrderItems } from "../../dist/generated/index.js";
import type { IOrderItemRepository } from "../repositories/orderItem.repository.js";
export interface FindAllOrderItemsParams {
    page: number;
    limit: number;
    search?: {
        orderId?: number;
        productId?: number;
    } | undefined;
    sortBy?: string | undefined;
    sortOrder?: "asc" | "desc" | undefined;
}
export interface OrderItemsListResponse {
    orderItems: OrderItems[];
    total: number;
    totalPages: number;
    currentPage: number;
}
export interface IOrderItemService {
    getAll(params: FindAllOrderItemsParams): Promise<OrderItemsListResponse>;
    getById(id: string): Promise<OrderItems>;
    create(data: {
        orderId: number;
        productId: number;
        quantity: number;
    }): Promise<OrderItems>;
    update(id: string, data: Partial<OrderItems>): Promise<OrderItems>;
    delete(id: string): Promise<OrderItems>;
}
export declare class OrderItemService implements IOrderItemService {
    private orderItemRepo;
    constructor(orderItemRepo: IOrderItemRepository);
    getAll: (params: FindAllOrderItemsParams) => Promise<OrderItemsListResponse>;
    getById: (id: string) => Promise<{
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        quantity: number;
        priceAtTime: Prisma.Decimal | null;
    }>;
    create: (data: {
        orderId: number;
        productId: number;
        quantity: number;
    }) => Promise<{
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        quantity: number;
        priceAtTime: Prisma.Decimal | null;
    }>;
    update: (id: string, data: Partial<OrderItems>) => Promise<{
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        quantity: number;
        priceAtTime: Prisma.Decimal | null;
    }>;
    delete: (id: string) => Promise<{
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        quantity: number;
        priceAtTime: Prisma.Decimal | null;
    }>;
}
//# sourceMappingURL=orderItem.service.d.ts.map
