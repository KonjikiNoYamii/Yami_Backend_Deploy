export class ProfileRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(skip, take, where, orderBy) {
        return this.prisma.profile.findMany({
            skip,
            take,
            where,
            orderBy,
        });
    }
    async count(where) {
        return this.prisma.profile.count({ where });
    }
    async findById(id) {
        return this.prisma.profile.findUnique({ where: { id } });
    }
    async create(data) {
        return this.prisma.profile.create({ data });
    }
    async update(id, data) {
        return this.prisma.profile.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        return this.prisma.profile.delete({ where: { id } });
    }
}
//# sourceMappingURL=profile.repository.js.map