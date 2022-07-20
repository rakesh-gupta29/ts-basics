// if required to hold dynamic key value pairs  depening upon the implementation details
interface ErrorContainer {
  [prop: string]: string;
}

const invalidName: ErrorContainer = {
  name: "Enter Valid Name ",
};

const invalidEmail: ErrorContainer = {
  email: "Enter Valid Email Address ",
};
// way to hold dynamic  key name
// an empty object too  is valid  here

const noError: ErrorContainer = {};
