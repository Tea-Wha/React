import {useState} from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const changeMsg = (e) => {
    setMessage(e.target.value);
  };
  const onChangeUserName = (e) => setUserName(e.target.value);
  // 이벤트는 매개변수를 직접 지정하여 전달하지 않아도 됨
  const onClick = () => {
    alert(`${userName} : ${message} `);
    setUserName(""); // 입력 비우기
    setMessage("");
  };
  // Enter Key가 입력되면  onClick() 호출
  const onKeyPress = (e) => {
    if (e.key == "Enter") onClick();
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="사용자명"
        onChange={onChangeUserName}
        value={userName}
      />
      <input
        type="text"
        placeholder="아무거나 입력"
        onChange={changeMsg}
        value={message}
        onKeyDown={onKeyPress}
        //  KeyDown 걸리면 -> onKeyPress 함수 실행 -> onClick 함수 실행
        // 확인 버튼도 있지만 -> 엔터 버튼으로도 동시에 같은 기능을 수행하게끔 하는 코드
      />
      <button onClick={onClick}>확인</button>
      <h2>입력 받은 메세지 : {message}</h2>
    </>
  );
};
export default EventPractice;
