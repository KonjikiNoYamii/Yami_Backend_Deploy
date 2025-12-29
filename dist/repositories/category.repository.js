export class CategoryRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(skip, take, where, orderBy) {
        return this.prisma.category.findMany({
            skip,
            take,
            where,
            orderBy,
            include: { products: true },
        });
    }
    async count(where) {
        return this.prisma.category.count({ where });
    }
    async findById(id) {
        return this.prisma.category.findUnique({ where: { id } });
    }
    async findByName(name) {
        return this.prisma.category.findFirst({
            where: { name, deletedAt: null },
        });
    }
    async create(name) {
        return this.prisma.category.create({
            data: { name },
        });
    }
    async update(id, data) {
        return this.prisma.category.update({
            where: { id },
            data,
        });
    }
    async softDelete(id) {
        return this.prisma.category.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
}
//# sourceMappingURL=category.repository.js.map