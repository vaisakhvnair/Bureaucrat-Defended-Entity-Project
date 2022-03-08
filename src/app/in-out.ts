export class InOut {

    siNo: String;
    date: String;
    name: String;
    dept: String;
    purpose: String;
    timeIn: String;
    timeOut: String;
    dsignature: String;


    constructor(siNo: String, date: String, name: String, dept: String, purpose: String,
        timeIn: String, timeOut: String, dsignature: String) {

        this.siNo = siNo;
        this.date = date;
        this.name = name;
        this.dept = dept;
        this.purpose = purpose;
        this.timeIn = timeIn;
        this.timeOut = timeOut;
        this.dsignature = dsignature;


    }
}
