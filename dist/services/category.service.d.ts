import type { Prisma, Category } from "../generated";
import type { ICategoryRepository } from "../repositories/category.repository.js";
export interface FindAllCategoryParams {
    page: number;
    limit: number;
    search?: {
        name?: string;
    };
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}
export interface CategoryListResponse {
    categories: Category[];
    total: number;
    totalPages: number;
    currentPage: number;
}
export interface ICategoryService {
    getAll(params: FindAllCategoryParams): Promise<CategoryListResponse>;
    getById(id: string): Promise<Category>;
    create(name: string): Promise<Category>;
    update(id: string, data: Prisma.CategoryUpdateInput): Promise<Category>;
    delete(id: string): Promise<Category>;
}
export declare class CategoryService implements ICategoryService {
    private categoryRepo;
    constructor(categoryRepo: ICategoryRepository);
    getAll(params: FindAllCategoryParams): Promise<CategoryListResponse>;
    getById(id: string): Promise<Category>;
    create(name: string): Promise<Category>;
    update(id: string, data: Prisma.CategoryUpdateInput): Promise<Category>;
    delete(id: string): Promise<Category>;
}
//# sourceMappingURL=category.service.d.ts.map
