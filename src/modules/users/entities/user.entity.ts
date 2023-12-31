import { randomUUID } from "node:crypto";

export class User {
    readonly id: string;
    name: string;
    email: string;
    phone: string;
    password: string;
    createdAt: string;

    constructor() {
        this.id = randomUUID();
        this.createdAt = new Date().toISOString();
    }
}
