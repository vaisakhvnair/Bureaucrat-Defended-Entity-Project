export class Prisoner {

    pid: String;
    firstName: String;
    lastName: String;
    middleName: String;
    dateOfBirth: String;
    gender: String;
    age: number;
    address: String;
    dateOfArrest: String;
    crimeType: String;
    eyeWitness: String;
    witnessAddress: String;
    complaintCount: number;
    eyeColor: String;
    hairColor: String;
    faceShape: String;
    remandDate: String;
    releaseDate: String;
    courtHearing: String;
    constructor(pid: String, firstName: String, lastName: String, middleName: String,dateOfBirth: String,gender: String,
        age: number,address: String,dateOfArrest: String,crimeType: String, eyeWitness: String,witnessAddress: String,
        complaintCount: number,eyeColor: String, hairColor: String, faceShape: String, remandDate: String,
        releaseDate: String, courtHearing: String) {

            this.pid=pid;
            this.firstName=firstName;
            this.lastName=lastName;
            this.middleName=middleName;
            this.dateOfBirth=dateOfBirth;
            this.gender=gender;
            this.age=age;
            this.address=address;
            this.dateOfArrest=dateOfArrest;
            this.crimeType=crimeType;
            this.eyeWitness=eyeWitness;
            this.witnessAddress=witnessAddress;
            this.complaintCount=complaintCount;
            this.eyeColor=eyeColor;
            this.hairColor=hairColor;
            this.faceShape=faceShape;
            this.remandDate=remandDate;
            this.releaseDate=releaseDate;
            this.courtHearing=courtHearing;


    }

}
