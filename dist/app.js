import Express, {} from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { errorHandler } from "./middleware/error.handler.js";
import swaggerUi from "swagger-ui-express";
// import characterRouter from './routes/character.route'
// import routerElement from './routes/element.route'
// import routerRarity from './routes/rarity.routes'
import routerProduct from "./routes/product.route.js";
import routerUser from "./routes/user.route.js";
import routerOrder from "./routes/order.route.js";
import routerOrderItem from "./routes/orderItem.route.js";
import authRoutes from "./routes/auth.route.js";
import routerCategory from "./routes/category.route.js";
import profileCategory from "./routes/profile.route.js";
import { successResponse } from "./utils/response.js";
import { requestLogger } from "./middleware/logger.middleware.js";
import swaggerSpec from "./utils/swagger.js";
const app = Express();
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(Express.json());
app.set("query parser", "extended");
app.use(Express.static("public"));
app.use(requestLogger);
app.get("/", (req, res) => {
    const waktuProses = Date.now() - (req.startTime || Date.now());
    successResponse(res, "Selamat datang di API saya", {
        hari: 4,
        status: "Server Hidup",
        waktuProses: `${waktuProses}ms`
    }, null, 200);
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/api/error-test", () => {
    throw new Error("Ini error test");
});
// app.use('/api/characters', characterRouter)
// app.use('/api/element', routerElement)
// app.use('/api/rarity', routerRarity)
app.use("/api/products", routerProduct);
app.use("/api/users", routerUser);
app.use("/api/orders", routerOrder);
app.use("/api/order-items", routerOrderItem);
app.use("/api/category", routerCategory);
app.use("/api/profiles", profileCategory);
app.use("/api/auth", authRoutes);
app.use(/.*/, (req, _res) => {
    throw new Error(`Route ${req.originalUrl} tidak ada di API`);
});
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map
