// codewars
// Check to see if a string has the same amount of 'x's and 'o's.

function XO(str) {
  const strLower = str.toLowerCase();

  let numberOfX = 0;
  let numberOfO = 0;

  for (let i = 0; i < strLower.length; i++) {
    if (strLower[i] === 'x') {
      numberOfX += 1;
    }

    if (strLower[i] === 'o') {
      numberOfO += 1;
    }
  }

  return numberOfX === numberOfO;
}
