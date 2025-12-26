export class AuthRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByEmail(email) {
        return this.prisma.user.findFirst({
            where: {
                email,
                deletedAt: null,
            },
        });
    }
    async create(data) {
        return this.prisma.user.create({ data });
    }
}
//# sourceMappingURL=auth.repository.js.map