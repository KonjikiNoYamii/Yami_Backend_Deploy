import { successResponse } from "../utils/response.js";
export class ProfileController {
    profileService;
    constructor(profileService) {
        this.profileService = profileService;
    }
    getAll = async (req, res) => {
        const result = await this.profileService.getAll({
            page: Number(req.query.page) || 1,
            limit: Number(req.query.limit) || 10,
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
            search: {
                name: req.query.name,
                gender: req.query.gender,
                address: req.query.address,
            },
        });
        successResponse(res, "Profile berhasil diambil!", result.profiles, {
            page: result.currentPage,
            limit: Number(req.query.limit) || 10,
            total: result.total,
            totalPages: result.totalPages,
        });
    };
    getById = async (req, res) => {
        if (!req.params.id) {
            throw new Error("Paramter tidak ada!");
        }
        const profile = await this.profileService.getById(req.params.id);
        successResponse(res, "Profile ditemukan!", profile);
    };
    create = async (req, res) => {
        const file = req.file;
        const result = await this.profileService.create({
            ...req.body,
            userId: Number(req.body.userId),
            profilePictureUrl: `/public/upload/${file?.filename}`,
        });
        successResponse(res, "Profile berhasil dibuat!", result, null, 201);
    };
    update = async (req, res) => {
        const file = req.file;
        if (!req.params.id) {
            throw new Error("Paramter tidak ada!");
        }
        const result = await this.profileService.update(req.params.id, {
            ...req.body,
            profilePictureUrl: `/public/upload/${file?.filename}`,
        });
        successResponse(res, "Profile berhasil diupdate!", result, null, 201);
    };
    delete = async (req, res) => {
        if (!req.params.id) {
            throw new Error("Paramter tidak ada!");
        }
        const result = await this.profileService.delete(req.params.id);
        successResponse(res, "Profile berhasil dihapus!", result);
    };
}
//# sourceMappingURL=profile.controller.js.map
