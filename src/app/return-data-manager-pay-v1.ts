import { DataManager } from "./data-manager";
import { PayRoll } from "./pay-roll";

export class ReturnDataManagerPayV1 {
    police:DataManager=new DataManager("","","","","","","","");
    payroll:PayRoll=new PayRoll("","","","","","");
    
    constructor(police:DataManager,payroll:PayRoll) {
        this.police=police;
        this.payroll=payroll;
    }
}
