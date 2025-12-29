import type { Request, Response } from "express";
import type { OrderService } from "../services/order.service.js";
interface IOrderController {
    checkout(req: Request, res: Response): Promise<void>;
    getAll(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    deleteOrder(req: Request, res: Response): Promise<void>;
}
export declare class OrderController implements IOrderController {
    private orderService;
    constructor(orderService: OrderService);
    checkout: (req: Request, res: Response) => Promise<void>;
    getAll: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    deleteOrder: (req: Request, res: Response) => Promise<void>;
    getStats: (_req: Request, res: Response) => Promise<void>;
}
export {};
//# sourceMappingURL=order.controller.d.ts.map
