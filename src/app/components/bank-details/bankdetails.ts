

export class BankDetailsData {
    accountHolderName: string;
    accountNo: number;
    accountName: string;
    ifscCode: string;
    bankName: string;
    constructor(accountHolderName: string, accountNo: number, accountName: string, ifscCode: string, bankName: string) {
        this.accountHolderName = accountHolderName;
        this.accountNo = accountNo;
        this.accountName = accountName;
        this.ifscCode = ifscCode;
        this.bankName = bankName;

    }
}