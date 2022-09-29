/* +1 누르면 숫자 증가, -1 누르면 숫자 감소하는 컴포넌트 */
import React, { useState } from "react";

function CounterComponent() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={onClickPlus}>+1</button>
      <button onClick={onClickMinus}>-1</button>
      <h1>{count}</h1>
    </div>
  );
}
export default CounterComponent;
