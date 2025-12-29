export class CategoryService {
    categoryRepo;
    constructor(categoryRepo) {
        this.categoryRepo = categoryRepo;
    }
    async getAll(params) {
        const { page, limit, search, sortBy, sortOrder } = params;
        const skip = (page - 1) * limit;
        const where = {
            deletedAt: null,
        };
        if (search?.name) {
            where.name = {
                contains: search.name,
                mode: "insensitive",
            };
        }
        const orderBy = sortBy
            ? { [sortBy]: sortOrder ?? "desc" }
            : { id: "desc" };
        const categories = await this.categoryRepo.findAll(skip, limit, where, orderBy);
        const total = await this.categoryRepo.count(where);
        return {
            categories,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        };
    }
    async getById(id) {
        const category = await this.categoryRepo.findById(Number(id));
        if (!category) {
            throw new Error("Category tidak ditemukan");
        }
        return category;
    }
    async create(name) {
        const exist = await this.categoryRepo.findByName(name);
        if (exist) {
            throw new Error("Nama category sudah digunakan");
        }
        return this.categoryRepo.create(name);
    }
    async update(id, data) {
        return this.categoryRepo.update(Number(id), data);
    }
    async delete(id) {
        return this.categoryRepo.softDelete(Number(id));
    }
}
//# sourceMappingURL=category.service.js.map