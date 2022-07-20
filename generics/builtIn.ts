// Partial : taking in a type and setting  every property  as optional

interface TS {
  name: string;
  description: string;
}

// const lang: TS = {
//   name: "ts lang ",
// }; //   complaing:  prop description is missing .

const langPartial: Partial<TS> = {
  name: "TS  Lang ",
}; // here , langpartial has all properties as optional.

// readolny  generics :  any type here o is readonly .
const readonlyArray: Readonly<string[]> = ["dataA", "dataB"]; // no change in data through any method  is allowed .
