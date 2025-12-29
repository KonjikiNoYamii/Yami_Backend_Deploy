import { successResponse } from "../utils/response.js";
export class CategoryController {
    categoryService;
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    getAll = async (req, res) => {
        const result = await this.categoryService.getAll({
            page: Number(req.query.page) || 1,
            limit: Number(req.query.limit) || 10,
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
            search: {
                name: req.query.name,
            },
        });
        successResponse(res, "Category berhasil diambil!", result.categories, {
            page: result.currentPage,
            limit: Number(req.query.limit) || 10,
            total: result.total,
            totalPages: result.totalPages,
        });
    };
    getById = async (req, res) => {
        if (!req.params.id) {
            throw new Error("Parameter tidak ditemukan!!");
        }
        const category = await this.categoryService.getById(req.params.id);
        successResponse(res, "Kategori ditemukan!", category);
    };
    create = async (req, res) => {
        const category = await this.categoryService.create(req.body.name);
        successResponse(res, "Category berhasil dibuat!", category, null, 201);
    };
    update = async (req, res) => {
        if (!req.params.id) {
            throw new Error("Parameter tidak ditemukan!!");
        }
        const updated = await this.categoryService.update(req.params.id, req.body);
        successResponse(res, "Category berhasil diupdate!", updated, null, 201);
    };
    delete = async (req, res) => {
        if (!req.params.id) {
            throw new Error("Parameter tidak ditemukan!!");
        }
        const removed = await this.categoryService.delete(req.params.id);
        successResponse(res, "Category berhasil dihapus!", removed);
    };
}
//# sourceMappingURL=category.controller.js.map
