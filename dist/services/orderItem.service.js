export class OrderItemService {
    orderItemRepo;
    constructor(orderItemRepo) {
        this.orderItemRepo = orderItemRepo;
    }
    getAll = async (params) => {
        const { page, limit, search, sortBy, sortOrder } = params;
        const skip = (page - 1) * limit;
        const where = { deletedAt: null };
        if (search?.orderId)
            where.orderId = search.orderId;
        if (search?.productId)
            where.productId = search.productId;
        const orderBy = sortBy
            ? { [sortBy]: sortOrder ?? "desc" }
            : { createdAt: "desc" };
        const orderItems = await this.orderItemRepo.findAll(skip, limit, where, orderBy);
        const total = await this.orderItemRepo.countAll(where);
        return {
            orderItems,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        };
    };
    getById = async (id) => {
        const item = await this.orderItemRepo.findById(Number(id));
        if (!item)
            throw new Error("Order item tidak ditemukan!");
        return item;
    };
    create = async (data) => {
        return this.orderItemRepo.create({
            quantity: data.quantity,
            order: {
                connect: { id: data.orderId },
            },
            product: {
                connect: { id: data.productId },
            },
        });
    };
    update = async (id, data) => {
        return this.orderItemRepo.update(Number(id), data);
    };
    delete = async (id) => {
        return this.orderItemRepo.softDelete(Number(id));
    };
}
//# sourceMappingURL=orderItem.service.js.map