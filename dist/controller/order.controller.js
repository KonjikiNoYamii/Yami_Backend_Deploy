import { successResponse } from "../utils/response.js";
export class OrderController {
    orderService;
    constructor(orderService) {
        this.orderService = orderService;
    }
    // ✅ CHECKOUT
    checkout = async (req, res) => {
        const userId = req.user.id; // dari auth middleware
        const data = req.body;
        const order = await this.orderService.checkout(userId, data);
        successResponse(res, "Checkout berhasil", order, null, 201);
    };
    // ✅ GET ALL ORDERS
    getAll = async (req, res) => {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const params = {
            page,
            limit,
            search: {
                userId: req.query.userId
                    ? Number(req.query.userId)
                    : undefined,
                minTotal: req.query.minTotal
                    ? Number(req.query.minTotal)
                    : undefined,
                maxTotal: req.query.maxTotal
                    ? Number(req.query.maxTotal)
                    : undefined,
            },
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder || "desc",
        };
        const result = await this.orderService.getAllOrders(params);
        successResponse(res, "Order berhasil diambil!", result.orders, {
            page: result.currentPage,
            limit,
            total: result.total,
            totalPages: result.totalPages,
        }, 200);
    };
    // ✅ GET ORDER BY ID
    getById = async (req, res) => {
        if (!req.params.id) {
            throw new Error("Parameter tidak ditemukan!");
        }
        const order = await this.orderService.getOrderById(req.params.id);
        successResponse(res, "Detail order berhasil diambil", order, null, 200);
    };
    // ✅ SOFT DELETE ORDER
    deleteOrder = async (req, res) => {
        if (!req.params.id) {
            throw new Error("ID tidak ditemukan!");
        }
        const order = await this.orderService.deleteOrder(req.params.id);
        successResponse(res, "Order berhasil dihapus!", order, null, 200);
    };
    getStats = async (_req, res) => {
        const stats = await this.orderService.exec();
        successResponse(res, "Order berhasil diambil!", stats, null, 200);
    };
}
//# sourceMappingURL=order.controller.js.map
