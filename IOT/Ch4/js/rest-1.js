function addNum(...numbers)
{
  let sum = 0;

  for (let number of numbers)
  {
    sum += number;
  }

  return sum;
}

console.log(addNum(1,3));
console.log(addNum(1,3,5,7,9));

// 인수의 일부분만 나머지 매개변수로 받기
function fruits (first, ... favs)
{
  let str1 = `가장 좋아하는 과일은 "${first}"입니다.\n`;
  let str2 = `나머지 좋아하는 과일은 "${favs}"입니다.`;
  return str1 + str2;
}

console.log(fruits("사과","포도","귤","파인애플","바나나"));