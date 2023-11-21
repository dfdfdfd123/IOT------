import React, { useState } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

function Average  ()  {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  }; // num 값 바꾸기

  const onInsert = e => {
    const nextList = list.concat(parseInt(number)); // 정수를 바꾸어서 기존 list에 추가
    setList(nextList);
    setNumber('');
  }; 

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button> 
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;