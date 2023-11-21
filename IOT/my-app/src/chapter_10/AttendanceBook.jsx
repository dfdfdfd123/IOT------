import React from "react";

const students = [
  {
      id: 1,
      name: "Inje",
  },
  {
      id: 2,
      name: "Steve",
  },
  {
      id: 3,
      name: "Bill",
  },
  {
      id: 4,
      name: "Jeff",
  },
];


function AttendanceBook(props) {

return(

      <ul>
            {students.map((student, index) => {
              return <li key={student.id}>{student.name}</li>;
           })}
      </ul>

  // id를 키값으로 사용
// {students.map((student) => {

 // return<li key={student.id}>{student.name}</li>;
// })}

// 포멧팅 된 문자열을 키값으로 사용
// {students.map((student, index) => {

 // <li key={student.id}>{student.name}</li>;
// })}

// id를 키값으로 사용
// {students.map((student, index) => {

//  <li key={index}>{student.name}</li>;
// })}

);




}


export default AttendanceBook;