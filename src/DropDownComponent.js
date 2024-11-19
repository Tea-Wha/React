import React, {useState} from "react";
// select 요소와 option 요소를 사용하여 드롭다운 메뉴 구현
const DropDownComponent = () => {
  const [selectValue, setSelectValue] = useState("");

  const handleChage = (e) => {
    setSelectValue(e.target.value);
  };

  const fruits = [
    {
      value: "Apple",
      text: "사과",
    },
    {
      value: "Banana",
      text: "바나나",
    },
    {
      value: "grape",
      text: "포도",
    },
    {
      value: "watermelone",
      text: "수박",
    },
  ];
  // selectValue를 제거하면 React가 아닌 HTML 자체가 <select>의 상태를 관리하게 된다.
  // 사용자가 select를 제어하기 위해 다음과 같이 사용한다.

  return (
    <>
      <h1>드롭다운 예제</h1>
      <select value={selectValue} onChange={handleChage}>
        <option value="" disabled>
          과일을 선택하세요.
        </option>
        <option value={fruits[0].value}>{fruits[0].text}</option>
        <option value={fruits[1].value}>{fruits[1].text}</option>
        <option value="grape">포도</option>
        <option value="watermelon">수박</option>
      </select>
      <p>선택된 과일 : {selectValue}</p>
    </>
  );
};
export default DropDownComponent;
