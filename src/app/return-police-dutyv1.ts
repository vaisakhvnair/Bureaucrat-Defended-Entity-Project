import { DutyRegister } from "./duty-register";
import { Police } from "./police";

export class ReturnPoliceDutyv1 {
    police:Police=new Police("","","","","","","","");
    duty:DutyRegister=new DutyRegister("","","","","","");
    
    constructor(police:Police, duty:DutyRegister) {
        this.police=police;
        this.duty=duty;
    }
}
