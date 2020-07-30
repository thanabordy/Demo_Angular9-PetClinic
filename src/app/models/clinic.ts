export class Clinic {
    _id: string;
    name: string;
    tel: number;
    tax: string;
    address: string;
    created_at: Date;
    updated_at: Date;
}

export interface ClinicResponse {
    _id: string;
    name: string,
    tel: number,
    tax: string,
    address: string,
    created_at: Date,
    updated_at: Date,
}