function mergeObjects(objA: object, objB: object) {
  return Object.assign(objA, objB);
} // return type  is object so no data is inferred  regarding strcuture of the data

function mergeGeneric<T1, T2>(objA: T1, obj2: T2) {
  return Object.assign(objA, obj2);
} // return type is intersectio of two types

type TypeA = {
  name: string;
};
type TypeB = {
  age: number;
};
const ObjA: TypeA = {
  name: "string name ",
};

const objB: TypeB = {
  age: 10,
};

const mergedObject = mergeGeneric<TypeA, TypeB>(ObjA, objB); // perfect type inferring for the result
