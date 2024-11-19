import {useState, useEffect} from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalID);
  }, []); // [ ]의존성 배열이라고 하며, [ ] 빈 배열이면 마운트 시점을 의미
  // 마운트 - 업데이트 - 언마운트

  // 1초마다 setInterval 함수가 계속 반복되고있음
  // 부담이 늘어남

  return (
    <>
      <h1>현재 시간을 표시합니다.</h1>
      <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
    </>
  );
};

export default Clock;
