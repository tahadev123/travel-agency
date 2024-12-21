function convertToPersianNumber(num) {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return num?.toString().replace(/\d/g, (digit) => persianDigits[digit]);
}

export { convertToPersianNumber }