import type { Profile } from "../../dist/generated/index.js";
import type { IProfileRepository } from "../repositories/profile.repository.js";
export interface FindAllProfileParams {
    page: number;
    limit: number;
    search?: {
        name?: string;
        gender?: string;
        address?: string;
    };
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}
export interface ProfileListResponse {
    profiles: Profile[];
    total: number;
    totalPages: number;
    currentPage: number;
}
export interface IProfileService {
    getAll(params: FindAllProfileParams): Promise<ProfileListResponse>;
    getById(id: string): Promise<Profile>;
    create(data: {
        name: string;
        gender: string;
        address: string;
        profilePictureUrl: string;
        userId: number;
    }): Promise<Profile>;
    update(id: string, data: {
        name: string;
        gender: string;
        address: string;
        profilePictureUrl: string;
    }): Promise<Profile>;
    delete(id: string): Promise<Profile>;
}
export declare class ProfileService implements IProfileService {
    private profileRepo;
    constructor(profileRepo: IProfileRepository);
    getAll(params: FindAllProfileParams): Promise<ProfileListResponse>;
    getById(id: string): Promise<Profile>;
    create(data: {
        name: string;
        gender: string;
        address: string;
        profilePictureUrl: string;
        userId: number;
    }): Promise<Profile>;
    update(id: string, data: {
        name: string;
        gender: string;
        address: string;
        profilePictureUrl: string;
    }): Promise<Profile>;
    delete(id: string): Promise<Profile>;
}
//# sourceMappingURL=profile.service.d.ts.map
