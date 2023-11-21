const arr = [1,3,4,6,8,11,12,23,34]


document.write("<h2>for문 결과</h2>") 
// 배열 요소의 개수만큼 반복
for (var i = 0; i < arr.length; i++) {
  // 현재 요소의 값과 10을 비교
  if (arr[i] > 10) {
    // 화면에 표시
    document.write(`${arr[i]}, `);

  }

}

document.write("<hr>")


document.write("<h2>forEach 결과</h2>") 
arr.forEach(function (element) {
  // 현재 요소의 값과 10을 비교
  if (element > 10) {
    // 화면에 표시
    document.write(`${element}, `);
  }
});

document.write("<hr>")

document.write("<h2>forOf 결과</h2>") 

for (const element of arr) {
  // 현재 요소의 값과 10을 비교
  if (element > 10) {
    // 화면에 표시
    document.write(`${element}, `);
  }
}









