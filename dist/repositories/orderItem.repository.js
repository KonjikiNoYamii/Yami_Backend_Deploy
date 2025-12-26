export class OrderItemRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(skip, take, where, orderBy) {
        return this.prisma.orderItems.findMany({
            skip,
            take,
            where,
            orderBy,
            include: {
                order: true,
                product: true,
            },
        });
    }
    countAll(where) {
        return this.prisma.orderItems.count({ where });
    }
    findById(id) {
        return this.prisma.orderItems.findUnique({
            where: { id },
            include: { order: true, product: true },
        });
    }
    create(data) {
        return this.prisma.orderItems.create({ data });
    }
    update(id, data) {
        return this.prisma.orderItems.update({
            where: { id },
            data,
        });
    }
    softDelete(id) {
        return this.prisma.orderItems.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
}
//# sourceMappingURL=orderItem.repository.js.map