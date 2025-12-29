export class ProfileService {
    profileRepo;
    constructor(profileRepo) {
        this.profileRepo = profileRepo;
    }
    async getAll(params) {
        const { page, limit, search, sortBy, sortOrder } = params;
        const skip = (page - 1) * limit;
        const where = {};
        if (search?.name) {
            where.name = { contains: search.name, mode: "insensitive" };
        }
        if (search?.gender) {
            where.gender = search.gender;
        }
        if (search?.address) {
            where.address = { contains: search.address, mode: "insensitive" };
        }
        const orderBy = sortBy
            ? { [sortBy]: sortOrder ?? "desc" }
            : { id: "desc" };
        const profiles = await this.profileRepo.findAll(skip, limit, where, orderBy);
        const total = await this.profileRepo.count(where);
        return {
            profiles,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        };
    }
    async getById(id) {
        const profile = await this.profileRepo.findById(Number(id));
        if (!profile) {
            throw new Error("Profile tidak ditemukan");
        }
        return profile;
    }
    async create(data) {
        return this.profileRepo.create({
            name: data.name,
            gender: data.gender,
            address: data.address,
            profilePictureUrl: data.profilePictureUrl,
            user: {
                connect: { id: data.userId },
            },
        });
    }
    async update(id, data) {
        return this.profileRepo.update(Number(id), data);
    }
    async delete(id) {
        return this.profileRepo.delete(Number(id));
    }
}
//# sourceMappingURL=profile.service.js.map