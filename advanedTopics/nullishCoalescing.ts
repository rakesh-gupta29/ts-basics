const stringValue: string = "randomString";

const storeData = stringValue ?? "Default"; // if target  is either null or undefined , then fallback to default value.
console.log(storeData);
