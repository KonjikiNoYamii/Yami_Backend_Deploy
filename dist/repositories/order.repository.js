export class OrderRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findProductsForCheckout(productIds, tx) {
        return tx.product.findMany({
            where: {
                deletedAt: null,
                id: { in: productIds },
            },
            select: {
                id: true,
                price: true,
                stock: true,
            },
        });
    }
    async decrementStock(productId, qty, tx) {
        await tx.product.update({
            where: { id: productId },
            data: {
                stock: { decrement: qty },
            },
        });
    }
    async createOrderWithItems(data, tx) {
        return tx.order.create({
            data,
            include: {
                user: true,
                orderItems: {
                    include: { product: true },
                },
            },
        });
    }
    async findAll(skip, take, where, orderBy) {
        return this.prisma.order.findMany({
            skip,
            take,
            where,
            orderBy,
            include: {
                user: true,
                orderItems: true,
            },
        });
    }
    async countAll(where) {
        return this.prisma.order.count({ where });
    }
    async findById(id) {
        return this.prisma.order.findUnique({
            where: { id },
            include: {
                user: true,
                orderItems: { include: { product: true } },
            },
        });
    }
    async softDelete(id) {
        return this.prisma.order.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
    async getStats() {
        return this.prisma.order.aggregate({
            _count: { id: true },
            _sum: { total: true },
            _min: { total: true },
            _max: { total: true },
        });
    }
    async getOrderStatsByUser() {
        return this.prisma.order.groupBy({
            by: ["userId"],
            _count: { id: true },
            _sum: { total: true },
        });
    }
}
//# sourceMappingURL=order.repository.js.map