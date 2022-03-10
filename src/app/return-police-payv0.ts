import { PayRoll } from "./pay-roll";
import { Police } from "./police";

export class ReturnPolicePayv0 {
    police:Police[]=[];
    payroll:PayRoll[]=[];
    constructor(police:Police[],payroll:PayRoll[]) {
        this.police=police;
        this.payroll=payroll;
        
    }
}
