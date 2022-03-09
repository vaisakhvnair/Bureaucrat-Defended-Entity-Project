export class DataManager {

  userName: String;
  password: String;
  id: string;
  name: String;
  designation: string;
  hiredate: string;
  email: String;
  address: String;


  constructor(userName: String, password: String, id: string, name: String, designation: string,
    hiredate: string, email: String, address: String) {
    this.userName = userName;
    this.password = password;
    this.id = id;
    this.name = name;
    this.designation = designation;
    this.hiredate = hiredate;
    this.email = email;
    this.address = address

  }
}
