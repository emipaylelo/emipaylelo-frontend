

export class AdminDashboardData {
    userId: number;
    name: string;
    cardType: string;
    documentAadhar: string;
    documentPan: string;
    verificationStatus: boolean;
    verify: string;
    constructor() {
        this.userId = 1;
        this.name = "pankaj";
        this.cardType = "gold";
        this.documentAadhar = "../../../assets/aadhar.png";
        this.documentPan = "../../../assets/pan.png";
        this.verificationStatus = true;
        this.verify = "c";

    }
}