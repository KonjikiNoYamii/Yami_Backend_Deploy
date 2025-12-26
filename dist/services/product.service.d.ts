import type { Category, Prisma, Product } from "../generated";
import type { IProductRepository } from "../repositories/product.repository.js";
export interface FindAllParams {
    page: number;
    limit: number;
    search?: {
        name?: string;
        min_price?: number;
        max_price?: number;
    };
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}
export interface ProductListResponse {
    products: Product[];
    total: number;
    totalPages: number;
    currenPage: number;
}
export interface IProductService {
    getAllProducts(params: FindAllParams): Promise<ProductListResponse>;
    getProductById(id: string): Promise<Category | (null & Product) | null>;
    createProduct(data: {
        name: string;
        description: string;
        price: number;
        stock: number;
        categoryId: number;
        image: string;
    }): Promise<Product>;
    updateProduct(id: string, data: {
        name?: string;
        description?: string;
        price?: number;
        stock?: number;
        categoryId?: number;
        image?: string;
    }): Promise<Product>;
    deleteProduct(id: string): Promise<Product>;
    exec(): Promise<{
        overview: any;
        byCategory: any;
    }>;
}
export declare class ProductService implements IProductService {
    private productRepo;
    constructor(productRepo: IProductRepository);
    getAllProducts: (params: FindAllParams) => Promise<ProductListResponse>;
    getProductById: (id: string) => Promise<Category | (null & Product) | null>;
    createProduct: (data: {
        name: string;
        description: string;
        price: number;
        stock: number;
        categoryId: number;
        image: string;
    }) => Promise<Product>;
    updateProduct: (id: string, data: {
        name?: string;
        description?: string;
        price?: number;
        stock?: number;
        categoryId?: number;
        image?: string;
    }) => Promise<Product>;
    deleteProduct: (id: string) => Promise<Product>;
    exec: () => Promise<{
        overview: Prisma.GetProductAggregateType<{
            _count: {
                id: true;
            };
            _avg: {
                price: true;
            };
            _sum: {
                stock: true;
            };
            _min: {
                price: true;
            };
            _max: {
                price: true;
            };
        }>;
        byCategory: (Prisma.PickEnumerable<Prisma.ProductGroupByOutputType, "categoryId"[]> & {
            _avg: {
                price: Prisma.Decimal | null;
            };
            _count: {
                id: number;
            };
        })[];
    }>;
}
//# sourceMappingURL=product.service.d.ts.map
