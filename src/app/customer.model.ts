export interface Customer {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNo: string;
    address: {
      city: string;
      streetName: string;
      addressLine1: string;
      addressLine2: string;
      pinCode: string;
      state: string;
      country: string;
    };
  }
  
