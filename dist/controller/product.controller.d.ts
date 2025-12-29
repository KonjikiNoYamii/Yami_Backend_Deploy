import type { Request, Response } from "express";
import type { IProductService } from "../services/product.service.js";
interface IProductController {
    getAll(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    deletedProduct(req: Request, res: Response): Promise<void>;
}
export declare class ProductController implements IProductController {
    private productService;
    constructor(productService: IProductService);
    getAll: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    deletedProduct: (req: Request, res: Response) => Promise<void>;
    getStats: (_req: Request, res: Response) => Promise<void>;
}
export {};
//# sourceMappingURL=product.controller.d.ts.map
