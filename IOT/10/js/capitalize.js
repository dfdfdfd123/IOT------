const string = prompt("영문 소문자로 된 문자열을 입력하세요.");

// string 메서드 사용
// const firstCh = string[0].toUpperCase();
// const remainStr = string.slice(1);
// const result = firstCh + remainStr;
// document.write(result);

const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
document.write(result);