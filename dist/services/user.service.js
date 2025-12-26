export class UserService {
    userRepo;
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async getAllUsers() {
        const users = await this.userRepo.findAll();
        return { users, total: users.length };
    }
    async getUserById(id) {
        const user = await this.userRepo.findById(Number(id));
        if (!user) {
            throw new Error("User tidak ditemukan");
        }
        return user;
    }
    async createUser(username, email, password_hash) {
        const exist = await this.userRepo.findByUsernameOrEmail(username, email);
        if (exist) {
            throw new Error("Username atau email sudah digunakan");
        }
        return this.userRepo.create({
            username,
            email,
            password_hash,
        });
    }
    async updateUser(id, data) {
        return this.userRepo.update(Number(id), data);
    }
    async deleteUser(id) {
        return this.userRepo.softDelete(Number(id));
    }
    async exec() {
        const overview = await this.userRepo.getStats();
        return {
            overview
        };
    }
}
//# sourceMappingURL=user.service.js.map