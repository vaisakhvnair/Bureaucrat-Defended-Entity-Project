import { DataManager } from "./data-manager";
import { PayRoll } from "./pay-roll";

export class ReturnDataManagerPayv0 {
    police:DataManager[]=[];
    payroll:PayRoll[]=[];
    constructor(police:DataManager[],payroll:PayRoll[]) {
        this.police=police;
        this.payroll=payroll;
        
    }
}
