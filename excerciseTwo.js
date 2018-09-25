module.exports.run = (brackets) => {

  if (brackets.length <= 1)
    return false;

  var matchingOpeningBracket, currBracket;
  var arr = [];

  var openingBrackets = ['[', '{', '('];
  var closingBrackets = [']', '}', ')'];

  for (var i = 0; i < brackets.length; i++) {
    currBracket = brackets[i];

    if (closingBrackets.indexOf(currBracket) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(currBracket)];
      if (arr.length == 0 || (arr.pop() != matchingOpeningBracket)) {
        return false;
      }
    } else {
      arr.push(currBracket);
    }
  }

  return (arr.length == 0);
};