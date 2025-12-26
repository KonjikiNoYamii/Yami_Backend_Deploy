import { Pool } from "pg";
import config from "./utils/env.js";
import { PrismaPg } from "../node_modules/@prisma/adapter-pg/dist/index";
import { PrismaClient } from "./generated/client.js";
let prisma;
const getPrisma = () => {
    if (!prisma) {
        const pool = new Pool({ connectionString: config.DATABASE_URL });
        const adapter = new PrismaPg(pool);
        prisma = new PrismaClient({ adapter });
    }
    return prisma;
};
const prismaInstance = getPrisma();
export default prismaInstance;
//# sourceMappingURL=prisma.js.map
