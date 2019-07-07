export const createMultiplyTable = (startInteger, endInteger) => {
  if (!Validator.validateInputIntegers(startInteger, endInteger)) {
    return null;
  }

  const fail = endInteger - startInteger;
  const spaces = "  ";
  const lineBreak = "\n";
  let multiplyTableAsString = "";

  for (let increment = 0; increment <= fail; increment++) {
    if (increment !== 0) {
      multiplyTableAsString = amendResult(multiplyTableAsString, lineBreak);
    }
    for (let subIncrement = 0; subIncrement <= increment; subIncrement++) {
      if (subIncrement !== 0) {
        multiplyTableAsString = amendResult(multiplyTableAsString, spaces);
      }
      multiplyTableAsString = amendResult(multiplyTableAsString, buildMultiplyItem(startInteger + subIncrement, startInteger + increment));
    }
  }

  return multiplyTableAsString;
};
const amendResult = (result, amendedValue) => {
  return result + amendedValue;
};

const buildMultiplyItem = (firstInteger, secondInteger) => {
  return `${firstInteger}*${secondInteger}=${firstInteger * secondInteger}`;
};

const Validator = {
  validateInputIntegers(firstInteger, secondInteger) {
    const MIN_VALUE = 0;
    const MAX_VALUE = 1000;

    return firstInteger
      && firstInteger
      && firstInteger < secondInteger
      && firstInteger > MIN_VALUE
      && secondInteger <= MAX_VALUE;
  }
};