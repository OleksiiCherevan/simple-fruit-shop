const COUNT_NUMBER_CHARACTERS = 12;
const COUNT_MIN_PASSWORD_LENGH = 4;

const ERROR_EMPTY =  "This field in required";
const ERROR_LETTERS_ONLY =  "Only letters allowed";
const ERROR_NUMBERS_ONLY = "Only numbers allowed";
const ERROR_SHOULD_HAVE_12_SYMBOLS = "Should contain 12 characters";
const ERROR_MIN_PASS_LENGTH = "Min length of password 4 symbols";


const setMessageIfError = (text, errorMessage, onErrorRule, onSetMessage) => {
    let isError = onErrorRule(text); // onCheckRule is error value
  
    if (isError) {
      onSetMessage(errorMessage);
    }

    return isError;
  };

export const nameValidation = (text, onSetErrorMessage) => {
    let isNotOnlyLetters = setMessageIfError(text, ERROR_LETTERS_ONLY, (text) => !new RegExp(/^[^0-9]*$/i).test(text), onSetErrorMessage);
    let isEmpty = setMessageIfError(text, ERROR_EMPTY, (text) => text.length < 1, onSetErrorMessage);
    
    return isNotOnlyLetters || isEmpty;
};

export const numberValidation = (text, onSetErrorMessage) => {
    let isNot12Chars = setMessageIfError(text, ERROR_SHOULD_HAVE_12_SYMBOLS, (text) => text.length !== COUNT_NUMBER_CHARACTERS, onSetErrorMessage);
    let isNotOnlyNumbers = setMessageIfError(text, ERROR_NUMBERS_ONLY, (text) => !new RegExp(/^[0-9]*$/i).test(text), onSetErrorMessage);
    let isEmpty = setMessageIfError(text, ERROR_EMPTY, (text) => text.length < 1, onSetErrorMessage);

    return isNotOnlyNumbers || isEmpty || isNot12Chars;
};

export const passwordValidation = (text, onSetErrorMessage) => {
  let inCorrectPassword = setMessageIfError(text, ERROR_MIN_PASS_LENGTH, (text) => text.length < COUNT_MIN_PASSWORD_LENGH, onSetErrorMessage);
  let isEmpty = setMessageIfError(text, ERROR_EMPTY, (text) => text.length < 1, onSetErrorMessage);

  return inCorrectPassword || isEmpty;
};
