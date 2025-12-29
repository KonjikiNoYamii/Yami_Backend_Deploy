{ }
import { successResponse } from "../utils/response.js";
export class ProductController {
    productService;
    constructor(productService) {
        this.productService = productService;
    }
    getAll = async (req, res) => {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = req.query.search;
        const sortBy = req.query.sortBy;
        const sortOrder = req.query.sortOrder || "desc";
        const data = { page, limit, search, sortBy, sortOrder };
        const result = await this.productService.getAllProducts(data);
        successResponse(res, "Produk berhasil diambil!", result.products, {
            page: result.currenPage,
            limit,
            total: result.total,
            totalPages: result.totalPages
        });
    };
    getById = async (req, res) => {
        if (!req.params.id) {
            throw new Error("Parameter tidak ditemukan!");
        }
        const product = await this.productService.getProductById(req.params.id);
        successResponse(res, "ID produk berhasil diambil", product, null, 200);
    };
    create = async (req, res) => {
        const file = req.file;
        if (!file) {
            throw new Error("Image is required");
        }
        const { name, description, price, stock, categoryId } = req.body;
        const imageurl = `/public/uploads/${file.filename}`;
        const newProduct = {
            name: String(name),
            description: String(description),
            price: Number(price),
            stock: Number(stock),
            categoryId: Number(categoryId),
            image: imageurl
        };
        const products = await this.productService.createProduct(newProduct);
        successResponse(res, "Produk berhasil dibuat!", products, null, 201);
    };
    update = async (req, res) => {
        if (!req.params.id) {
            throw new Error("Parameter tidak ditemukan!");
        }
        const product = await this.productService.updateProduct(req.params.id, req.body);
        successResponse(res, "Produk berhasil di update", product, null, 200);
    };
    deletedProduct = async (req, res) => {
        if (!req.params.id) {
            throw new Error("ID tidak ditemukan!");
        }
        const product = await this.productService.deleteProduct(req.params.id);
        successResponse(res, "Produk berhasil dihapus!", product, null, 200);
    };
    getStats = async (_req, res) => {
        const stats = await this.productService.exec();
        successResponse(res, "Produk berhasil diambil", stats, null, 200);
    };
}
//# sourceMappingURL=product.controller.js.map
