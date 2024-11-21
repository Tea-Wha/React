import {useState, useMemo, useCallback} from "react";

const getAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number)); // 입력받은 값을 정수로 변환
    setList(nextList); // 새로 만들어진 배열로 상태 변경
    setNumber(""); // 입력창을 비우기 위해서
  }, [list, number]);

  const avg = useMemo(() => getAverage(list), [list]);
  // 값을 유지해주는 기능

  return (
    <>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>{list && list.map((val, index) => <li key={index}>{val}</li>)}</ul>
      <p>평균값 : {avg}</p>
      {/* 즉시 호출 */}
    </>
  );
};
export default Average;

// 즉시 호출과 다른 호출을 구분하는 것이 중요
