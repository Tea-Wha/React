import {useEffect, useState} from "react";
// id 값은 게시글 번호 -> 서버가 자동 생성하게끔
// 렌더링을 최대한 줄여야함

const ToDoList = () => {
  const [names, setNames] = useState(() => {
    const storedNames = localStorage.getItem("names");
    return storedNames
      ? JSON.parse(storedNames)
      : [
          {id: 1, text: "HTML 연습"},
          {id: 2, text: "CSS 복습"},
          {id: 3, text: "자바스크립트 이해"},
          {id: 4, text: "리액트 프로젝트"},
        ];
  });
  // localStorage 저장 기능

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);
  // 값 유지 기능

  const [inputText, setInputText] = useState("");
  const [nextID, setNextID] = useState(5); // useState 제한이 필요함 (2-3개 까지는 괜찮음)
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    // const nextNames = names.concat({
    //   id: nextID,
    //   text: inputText,
    // });
    const nextNames = [...names, {id: nextID, text: inputText}];
    setNextID(nextID + 1); // 렌더링 1 -> id를 증가 시킴
    setNames(nextNames); // 렌더링 2 -> ToDo List 갱신
    setInputText(""); // 렌더링 3 -> 입력창 초기화
  };
  const onRemove = (id) => {
    // 조건에 맞는 요소만 반환 받아서 새로운 배열 생성
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={onChange}
        //   onKeyDown={(e) => {
        //     if (e.key === "Enter") {
        //       onClick();
        //     }
        //   }
        // }
      />
      <button onClick={onClick}>추가</button>
      <ul>
        {names &&
          names.map((name) => (
            <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
              {name.text}
            </li>
          ))}
      </ul>
    </>
  );
};
export default ToDoList;

// text 칠 때 onChange 켜짐 -> 입력된 Text를 names의 Text로 반환
// 클릭 버튼 누를 때 onClick 켜짐 -> 입력된 Text와 ID 번호를  배열 형태로 반환
// ID 증가 -> 다음 배열 대비 /  및 names에 setNames를 통해 추가
// setInputText를 이용해 입력창 초기화

// 불변성의 원칙 -> 주소가 바뀌는 것을 기준으로 삼음 -> 속도면에서 이득
// useState는 절대 for 문 안에 넣으면 안된다 -> 렌더링이 계속 반복해서 진행됨

// 실제로는 DataBase에서 지워야 함
