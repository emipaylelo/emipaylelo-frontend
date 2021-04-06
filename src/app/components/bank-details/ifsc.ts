export class IFSC {
    bank: string;
    ifsc: string;
    branch: string;
    address: string;
    contact: string;
    city: string;
    rtgs: boolean;
    state: string;
    district: string;
    constructor() {
        this.bank = "Karnataka Bank";
        this.ifsc = "KARB0000001";
        this.branch = "RTGS-HO";
        this.address = "REGD. & HEAD OFFICE, P.B.NO.599, MAHAVEER CIRCLE, KANKANADY, MANGALORE - 575002";
        this.contact = "2228222";

        this.city = "DAKSHINA KANNADA";
        this.rtgs = true
        this.district = "MANGALORE";
        this.state = "KARNATAKA";
    }
}