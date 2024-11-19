// 컴포넌트는 함수형 컴포넌트와 클래스형 컴포넌트가 있음
// 현재는 함수형 컴포넌트만 사용됨
// 예전에는 상태관리와 생명주기 관리를 위해서 클래스형 컴포넌트를 사용했지만
// v16.8 이후부터 함수형 컴포넌트에서도 상태관리와 생명주기 관리가 가능해짐

import {useState} from "react";
// 상태관리 Hook

const Counter = () => {
  const [number, setNumber] = useState(0); // 초기값 0 의미
  // setNumber의 의미는 ? -> 기본 함수와 같은 것인가?
  // setter 함수
  // setNumber() -> 함수 호출의 의미
  // () =>   / 익명의 함수
  // 앞의 number가 바뀌는 것이 리렌더링 조건으로 본다

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => setNumber(number - 1)}>-1</button>
    </>
  );
};
export default Counter;
