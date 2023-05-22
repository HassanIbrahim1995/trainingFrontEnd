export interface Employee {
     id:number;
    firstName: string;
    lastName: string;
    birthday: string;
    age: number;
    phoneNumber: string;
    department: string;
    addresses: Address[];
  }
  
  export interface Address {
    streetName: string;
    houseNumber: string;
    zipCode: string;
    city: string;
    country: string;
  }
  