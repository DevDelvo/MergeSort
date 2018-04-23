function split(wholeArray) {
  if (wholeArray.length === 1) { //base case
    return wholeArray;
  }
  let middle = Math.floor(wholeArray.length / 2);
  let left = wholeArray.slice(0, middle);
  let right = wholeArray.slice(middle);
  console.log('left is ', left, 'right is ', right);
  return sort(split(left), split(right));
}

sort = (left, right) => {
  let newArr = [];
  while (left.length) {
    if (left[0] > right[0]) {
      newArr.push(right.shift());
    } else {
      newArr.push(left.shift());
    }
  }
  console.log('new arr = ', newArr);

  return newArr.concat(left).concat(right);
}
