import type { Request, Response } from "express";
import type { IUserService } from "../services/user.service.js";
export interface IUserController {
    getAll(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
export declare class UserController implements IUserController {
    private userService;
    constructor(userService: IUserService);
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    getStats: (_req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=user.controller.d.ts.map
