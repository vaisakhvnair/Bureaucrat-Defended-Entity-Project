export class FIR {
    
    complaintNumber:String;
    victimName:String;
    offence:String;
    timeOfCrime:String;
    dateOfCrime:String;
    placeOfCrime:String;
    witnessStatement:String;
    culpritName:String;


    constructor(  complaintNumber:String,victimName:String, offence:String,timeOfCrime:String,dateOfCrime:String,
        placeOfCrime:String,witnessStatement:String,culpritName:String) {

        this.complaintNumber=complaintNumber;
        this.victimName=victimName;
        this.offence=offence;
        this.timeOfCrime=timeOfCrime;
        this.dateOfCrime=dateOfCrime;
        this.placeOfCrime=placeOfCrime;
        this.witnessStatement=witnessStatement;
        this.culpritName=culpritName;

        
    }
}
