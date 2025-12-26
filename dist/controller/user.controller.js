import { successResponse } from "../utils/response.js";
export class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    getAll = async (_req, res) => {
        const result = await this.userService.getAllUsers();
        successResponse(res, "Semua user berhasil diambil", result);
    };
    getById = async (req, res) => {
        if (!req.params.id) {
            throw new Error("Parameter tidak ditemukan!");
        }
        const user = await this.userService.getUserById(req.params.id);
        successResponse(res, "User ditemukan", user);
    };
    create = async (req, res) => {
        const { username, email, password_hash } = req.body;
        const user = await this.userService.createUser(username, email, password_hash);
        successResponse(res, "User berhasil dibuat", user, null, 201);
    };
    update = async (req, res) => {
        if (!req.params.id) {
            throw new Error("Paramater tidak ditemukan!");
        }
        const user = await this.userService.updateUser(req.params.id, req.body);
        successResponse(res, "User berhasil diperbarui", user);
    };
    delete = async (req, res) => {
        if (!req.params.id) {
            throw new Error("Paramater tidak ditemukan!");
        }
        const user = await this.userService.deleteUser(req.params.id);
        successResponse(res, "User berhasil dihapus", user);
    };
    getStats = async (_req, res) => {
        const stats = await this.userService.exec();
        successResponse(res, "User berhasil diambil!", stats, null, 200);
    };
}
//# sourceMappingURL=user.controller.js.map
