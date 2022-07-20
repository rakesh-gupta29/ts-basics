const names: Array<string> = []; // generics are like functions having the ability to emit type data based on the arguements received .

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("string data");
  }, 1000);
}); // defauly inference is Promise <unknown > . here we can specify the  type of data that is going to emit  on resolve or rejct call. Helps in .then and .catch calls

promise.then((data) => data.split(" "));
