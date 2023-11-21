import React from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

function Accommodate() {
  const { count, increase, decrease } = useCounter(0);

  const handleEnter = () => {
    if (count < MAX_CAPACITY) {
      increase();
    }
  };

  const handleExit = () => {
    decrease();
  };

  return (
    <div>
      <p>총 {count}명 수용했습니다.</p>
      {count >= MAX_CAPACITY && <p style={{ color: 'red' }}>정원이 가득찼습니다.</p>}
      <button onClick={handleEnter} disabled={count >= MAX_CAPACITY}>
        입장
      </button>
      <button onClick={handleExit}>퇴장</button>
    </div>
  );
}

export default Accommodate;
