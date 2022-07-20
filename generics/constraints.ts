// for generics , if need to constaint the type of arguement received , we can  restrict the type of data that is being entered by defining  the constaint of the data that is being entered that id being entered.
function mergeWithConstraint<A extends object, B extends object>(
  objA: A,
  objB: B
) {
  return Object.assign(objA, objB);
}

type TypeA = {
  name: string;
  age: number;
};

type TypeB = {
  name: string;
};
const merged = mergeWithConstraint<TypeA, TypeB>(
  { name: "string name ", age: 30 },
  { name: "test" }
);
