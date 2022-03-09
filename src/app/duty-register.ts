export class DutyRegister {
      userName:string;
	  date:string;
	  timeOnDuty:string;
	  name:string;
	  dutyPoint:string;
	  timeOffDuty:string;
      constructor( userName:string,date:string,timeOnDuty:string,name:string,dutyPoint:string,timeOffDuty:string) {
          this.userName=userName;
          this.date=date;
          this.timeOnDuty=timeOnDuty;
          this.name=name;
          this.dutyPoint=dutyPoint;
          this.timeOffDuty=timeOffDuty;
      }
}
