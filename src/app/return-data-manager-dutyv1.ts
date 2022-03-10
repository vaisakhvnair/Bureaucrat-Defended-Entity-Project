import { DataManager } from "./data-manager";
import { DutyRegister } from "./duty-register";

export class ReturnDataManagerDutyv1 {
    police:DataManager=new DataManager("","","","","","","","");
    duty:DutyRegister=new DutyRegister("","","","","","");
    
    constructor(police:DataManager, duty:DutyRegister) {
        this.police=police;
        this.duty=duty;
    }
}
