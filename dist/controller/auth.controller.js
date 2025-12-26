import { successResponse } from "../utils/response.js";
export class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    register = async (req, res) => {
        const result = await this.authService.register(req.body);
        successResponse(res, "Register berhasil!!", result, null, 201);
    };
    login = async (req, res) => {
        const result = await this.authService.login(req.body);
        successResponse(res, "Login berhasil!!", result, null, 200);
    };
}
//# sourceMappingURL=auth.controller.js.map
