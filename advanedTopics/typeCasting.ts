type StringData = "string";
type NumberData = 10;
type NumberOrString = StringData | NumberData;

const add = (val1: NumberOrString, val2: NumberOrString) => {
  if (typeof val1 == "string" || typeof val2 == "string") {
    return (val1.toString() + val2.toString()) as string;
  }
  return (val1 + val2) as number;
}; // return value is inferred as string | number

// this feature is primarily used for typecasring html elements selcted ans to get corrected attributes for html elements
