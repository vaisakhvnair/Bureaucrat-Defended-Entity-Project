export class PayRoll {
      userName:string;
	  pid:string;
	  name:string;
	  regularSalary:string;
	  partTimeSalary:string;
	  annualSalary:string;
      constructor(userName:string,pid:string,name:string,regularSalary:string,partTimeSalary:string,annualSalary:string) {
          this.userName=userName;
          this.pid=pid;
          this.name=name;
          this.regularSalary=regularSalary;
          this.partTimeSalary=partTimeSalary;
          this.annualSalary=annualSalary;
      }
}
