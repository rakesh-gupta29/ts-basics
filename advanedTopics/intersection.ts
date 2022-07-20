// intersection is  the process of crating a new type containing all  attributes of both the types .
type Attributes = {
  name: string;
  age: number;
};
type Actions = {
  greet: (person: string) => void;
};

type Person = Attributes & Actions;

let user: Person = {
  name: "userName",
  age: 10,
  greet: (person) => {
    console.log(`Hello ${person}`);
  },
};
