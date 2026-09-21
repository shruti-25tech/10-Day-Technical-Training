export interface Employee {
    id: number;
    name: string;
    email: string;
    department: string;
    salary: number;
    phone?: string;
}

export interface ApiUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: {
        department: string;
    };
}

export interface UsersResponse {
    users: ApiUser[];
}