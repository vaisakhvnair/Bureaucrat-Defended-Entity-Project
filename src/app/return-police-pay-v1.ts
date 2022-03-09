import { PayRoll } from "./pay-roll";
import { Police } from "./police";

export class ReturnPolicePayV1 {
    police:Police=new Police("","","","","","","","");
    payroll:PayRoll=new PayRoll("","","","","","");
    
    constructor(police:Police,payroll:PayRoll) {
        this.police=police;
        this.payroll=payroll;
    }
}
