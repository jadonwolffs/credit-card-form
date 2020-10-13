import Payment from "payment";

function getCardTypeList() {
  const cards = Payment.getCardArray();
  let result = {};
  cards.forEach(card => {
    result = {
      ...result,
      [card]: card
    };
  });
  return result;
}

function validateCardNumber(number = "") {
  let result = false;
  result = Payment.fns.validateCardNumber(number);
  return result;
}

function getCardColorByType(cardType = "other") {
  const cards = getCardTypeList();
  let color = "#484848";
  switch (cardType) {
    case cards.visa:
      color = "rgb(0, 87, 159)";
      break;
    case cards.mastercard:
      color = "rgb(248, 159, 21)";
      break;
    case cards.discover:
      color = "rgb(188, 44, 27)";
      break;
    case cards.amex:
      color = "rgb(0, 112, 209)";
      break;
    case cards.jcb:
      color = "rgb(0, 92, 172)";
      break;
    case cards.dinersclub:
      color = "rgb(24, 73, 119)";
      break;
    case cards.unionpay:
      color = "rgb(184, 184, 184)";
      break;
    case cards.elo:
      color = "rgb(17, 19, 19)";
      break;
    default:
      break;
  }
  return color;
}

function transformDate({ month, year } = { month: "", year: "" }) {
  return year !== "" ? `${month}/${year}` : month;
}

function transformNumber(number = "") {
  return number
    .replace(/ /g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
}

function transformCvv(cvv = "") {
  return cvv.replace(/\d/g, "*");
}

function getCardType(number = "") {
  let result =
    Payment.fns.cardType(number) !== null
      ? Payment.fns.cardType(number)
      : "other";
  return result;
}

function convertUnicode(input) {
  return input.replace(/\\u(\w\w\w\w)/g, function(a, b) {
    var charcode = parseInt(b, 16);
    return String.fromCharCode(charcode);
  });
}

export default {
  transformDate,
  transformNumber,
  transformCvv,
  getCardType,
  getCardColorByType,
  getCardTypeList,
  validateCardNumber,
  convertUnicode
};
