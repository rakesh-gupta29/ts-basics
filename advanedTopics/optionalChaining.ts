//  for a property which might or might not exist , an optional chaining is done
interface User {
  name: string;
  age: number;
  address: object;
}

let user = {
  name: "userName",
  age: 10,
  address: {
    street: "10",
  },
};
console.log(user.address?.street); // optional chainging : if it exists then  proceed further , else treminate the process.
