import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

function AverageUseMemo() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  //const onChange = e => {
  //  setNumber(e.target.value); //State의 number를 변경
 // };

 // const onInsert = e => {
  //  const nextList = list.concat(parseInt(number)); // number를 정수로 바꾸어서 list에 추가
  //  setList(nextList); // setlist를 통해 state를 변경
  //  setNumber(''); // number를 빈 공간으로
  // };

 const onChange = useCallback(e => {
  setNumber(e.target.value);
}, []);

const onInsert = useCallback(
  (e) => {
  const nextList = list.concat(parseInt(number));
  setList(nextList);
  setNumber('');
}, [number, list]);

  const average = useMemo(() => getAverage(list), [list]);

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
        <b>평균 값:</b> {average}
      </div>
    </div>
  );
}

export default AverageUseMemo;





