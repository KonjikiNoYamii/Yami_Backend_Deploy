export class OrderService {
    prisma;
    orderRepo;
    constructor(prisma, orderRepo) {
        this.prisma = prisma;
        this.orderRepo = orderRepo;
    }
    // ✅ CHECKOUT YANG BENAR
    checkout = async (userId, data) => {
        return this.prisma.$transaction(async (tx) => {
            let total = 0;
            const productIds = data.orderItem.map((i) => i.productId);
            const products = await this.orderRepo.findProductsForCheckout(productIds, tx);
            const orderItems = [];
            for (const item of data.orderItem) {
                const product = products.find((p) => p.id === item.productId);
                if (!product) {
                    throw new Error(`Product ${item.productId} tidak ditemukan`);
                }
                if (product.stock < item.quantity) {
                    throw new Error(`Stock produk ${item.productId} tidak cukup`);
                }
                total += Number(product.price) * item.quantity;
                orderItems.push({
                    product: {
                        connect: {
                            id: product.id,
                        },
                    },
                    quantity: item.quantity,
                    priceAtTime: product.price,
                });
                await this.orderRepo.decrementStock(product.id, item.quantity, tx);
            }
            return this.orderRepo.createOrderWithItems({
                user: { connect: { id: userId } },
                total,
                orderItems: {
                    create: orderItems,
                },
            }, tx);
        });
    };
    getAllOrders = async (params) => {
        const { page, limit, search, sortBy, sortOrder } = params;
        const skip = (page - 1) * limit;
        const where = {
            deletedAt: null,
        };
        if (search?.userId)
            where.userId = search.userId;
        if (search?.minTotal || search?.maxTotal) {
            where.total = {};
            if (search.minTotal)
                where.total.gte = search.minTotal;
            if (search.maxTotal)
                where.total.lte = search.maxTotal;
        }
        const orderBy = sortBy
            ? { [sortBy]: sortOrder ?? "desc" }
            : { createdAt: "desc" };
        const orders = await this.orderRepo.findAll(skip, limit, where, orderBy);
        const total = await this.orderRepo.countAll(where);
        return {
            orders,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        };
    };
    getOrderById = async (id) => {
        const order = await this.orderRepo.findById(parseInt(id));
        if (!order)
            throw new Error("Order tidak ditemukan");
        return order;
    };
    deleteOrder = async (id) => {
        return this.orderRepo.softDelete(parseInt(id));
    };
    exec = async () => {
        const stats = await this.orderRepo.getStats();
        const userStats = await this.orderRepo.getOrderStatsByUser();
        return {
            overview: stats,
            byUser: userStats,
        };
    };
}
//# sourceMappingURL=order.service.js.map