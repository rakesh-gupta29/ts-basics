// type constraint continued

function extract<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key]; // this key may or may not exist here so to make sure that this key exists we have to put a constarint that this key always exist or to add a fallback
}

const data = extract({ key: "key data" }, "key"); // so not only we can accept multiple args but we can bind them together so that  what we end up is correct logically .
