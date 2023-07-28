/**
 * @description format phone number to "*(xxx)-xxx-xxxx, extension xxx*""
 */
export const parsePhoneNumber = (phoneNumber: string) => {
  const extension = getExtension(phoneNumber);
  const numWithoutExtension = getNumWithoutExtension(phoneNumber);
  if (extension === "") {
    return numWithoutExtension;
  }
  return numWithoutExtension + ", " + extension;
};
const getExtension = (phoneNumber: string) => {
  const extension = phoneNumber.split("x")[1];
  if (extension === undefined) {
    return "";
  }
  return "extension " + extension;
};

/**
 * @description parse phone number to (xxx)-xxx-xxxx, without region code 1 (US)
 */
const getNumWithoutExtension = (phoneNumber: string) => {
  let numWithoutExtension = phoneNumber.split("x")[0];
  numWithoutExtension = numWithoutExtension.trim();
  //   replace ., -, and ) with space, ( to nothing
  numWithoutExtension = numWithoutExtension.replace("(", "");
  numWithoutExtension = numWithoutExtension.replace(/\.|-|\)/g, " ");
  // split by space
  const numArr = numWithoutExtension.split(" ");

  console.log(numArr);

  if (numArr.length === 3) {
    // compose (xxx)-xxx-xxxx
    numArr[0] = `(${numArr[0]})`;
  } else if (numArr.length === 4) {
    // get only from 1 to end of array
    numArr.shift();
    numArr[0] = `(${numArr[0]})`;
  }
  // compose numArr by -
  numWithoutExtension = numArr.join("-");
  return numWithoutExtension;
};
