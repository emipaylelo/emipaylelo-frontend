import { CardType } from './card-type';
import { User } from './users';
export class BankDetail {
    bankDetailId: number;
    bankName: string;
    bankAccountNo: string;
    bankIfsc: string;
    user: User;
    cardType: CardType;
    constructor() {


    }
}
