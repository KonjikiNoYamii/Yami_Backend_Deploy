export class UserRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.user.findMany({
            where: { deletedAt: null },
            include: { profile: true, orders: true },
        });
    }
    async findById(id) {
        return this.prisma.user.findFirst({
            where: { id, deletedAt: null },
            include: { profile: true, orders: true },
        });
    }
    async findByUsernameOrEmail(username, email) {
        return this.prisma.user.findFirst({
            where: {
                OR: [{ username }, { email }],
                deletedAt: null,
            },
        });
    }
    async create(data) {
        return this.prisma.user.create({ data });
    }
    async update(id, data) {
        return this.prisma.user.update({
            where: { id, deletedAt: null },
            data,
        });
    }
    async softDelete(id) {
        return this.prisma.user.update({
            where: { id, deletedAt: null },
            data: { deletedAt: new Date() },
        });
    }
    async getStats() {
        return this.prisma.user.aggregate({
            _count: { id: true },
        });
    }
}
//# sourceMappingURL=user.repository.js.map