export class ProductService {
    productRepo;
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    getAllProducts = async (params) => {
        const { page, limit, search, sortBy, sortOrder } = params;
        const skip = (page - 1) * limit;
        const whereClause = {
            deletedAt: null,
        };
        if (search?.name) {
            whereClause.name = {
                contains: search.name,
                mode: "insensitive",
            };
        }
        if (search?.min_price || search?.max_price) {
            whereClause.price = {};
            if (search.min_price) {
                whereClause.price.gte = search.min_price;
            }
            if (search.max_price) {
                whereClause.price.lte = search.max_price;
            }
        }
        const sortCriteria = sortBy
            ? { [sortBy]: sortOrder || "desc" }
            : { createdAt: "desc" };
        const products = await this.productRepo.list(skip, limit, whereClause, sortCriteria);
        const total = await this.productRepo.countAll(whereClause);
        return {
            products,
            total,
            totalPages: Math.ceil(total / limit),
            currenPage: page,
        };
    };
    getProductById = async (id) => {
        const numid = parseInt(id);
        const product = await this.productRepo.findById(numid);
        if (!product) {
            throw new Error("Product tidak ada!");
        }
        return product;
    };
    createProduct = async (data) => {
        const product = {
            name: data.name,
            description: data.description ?? null,
            price: data.price,
            stock: data.stock,
            categoryId: data.categoryId,
            image: data.image,
        };
        return await this.productRepo.create(product);
    };
    updateProduct = async (id, data) => {
        const numid = parseInt(id);
        const products = {
            name: String(data.name),
            description: String(data.description),
            price: Number(data.price),
            stock: Number(data.stock),
            categoryId: Number(data.categoryId),
            image: String(data.image)
        };
        return await this.productRepo.update(numid, products);
    };
    deleteProduct = async (id) => {
        const numid = parseInt(id);
        return await this.productRepo.softDelete(numid);
    };
    exec = async () => {
        const stats = await this.productRepo.getStats();
        const categoryStats = await this.productRepo.getProductByCategoryStats();
        return {
            overview: stats,
            byCategory: categoryStats
        };
    };
}
//# sourceMappingURL=product.service.js.map