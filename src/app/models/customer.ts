export class Customer {
    _id: string;
    code: string;
    name: string;
    email: string;
    tel: number;
    line_id:string;
    address:string;
    created_at: Date;
    updated_at: Date;
}

export interface CustomerResponse {
    _id: string;
    code: string,
    name: string,
    email: string,
    tel: number,
    line_id:string;
    address:string;
    created_at: Date,
    updated_at: Date,
}