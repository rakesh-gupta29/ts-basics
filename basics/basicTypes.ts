/*
following are the types built in typescript at very bsic level .
1. numbers : all numbers 
2. string : all etxt values 
3. boolean : true or false
4. objects : all objects ( specific typesa are possible)
5. arrays : all arrays ( specific types are possible)

special data tyeps : types which are not recognised by javascript but TS only and are transpiled down to other forms during  compilation.
tuples : arrays with fixed size and data types at every index 
enum : indexed labels for use , binding related data together 
any :  excluding something from typescript  .

*/

enum Role {
  USER = 10,
  ADMIN = 20,
}

let user: {
  name: string; // string
  age: number; // number
  isAdmin: boolean; // boolean
  hobbies: string[]; // string []
  address: {
    street: string;
    pinCode: number;
  }; // object  types
  maritalStatus: "Married" | "Unmarried"; // union of two values
  role: Role.USER;
  task: any; // exclusion of TS and its features
};

export {};
