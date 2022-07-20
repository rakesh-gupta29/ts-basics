// function countAnnDescribe<T>(elem: T) {
//   let description: string;
//   if (elem.length > 0) {
//     // ts complainging about the length property  so we  wil have to extend it to include the length property.
//     description = "Got a valid array";
//   } else {
//     description = "Invalid Array";
//   }
//   return [elem];
// }

// idea is to  describe the properties taht we want the arg to have so that we can check  when called . if we want aboe function to accept only arg that has a length proprty then we can create a property that is going to have a  proprty called length.

type ArgWithLength = {
  length: number;
};
function countAnnDescribe<T extends ArgWithLength>(elem: T) {
  let description: string;
  if (elem.length > 0) {
    // ts complainging about the length property  so we  wil have to extend it to include the length property.
    description = "Got a valid array";
  } else {
    description = "Invalid Array";
  }
  return [elem];
}
