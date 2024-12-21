const isValidPhoneNumber = (val) => {
  let regex = new RegExp("^[0][9][0-9][0-9]{8,8}$").test(val);
  return regex;
};

const isValidNationalCode = (code) => {
  if (code.length !== 10 || /(\d)(\1){9}/.test(code)) return false;

  let sum = 0,
    chars = code.split(""),
    lastDigit,
    remainder;

  for (let i = 0; i < 9; i++) sum += +chars[i] * (10 - i);

  remainder = sum % 11;
  lastDigit = remainder < 2 ? remainder : 11 - remainder;

  return +chars[9] === lastDigit;
};

export { isValidPhoneNumber, isValidNationalCode };
