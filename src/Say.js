import {hover} from "@testing-library/user-event/dist/hover";
import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  .enterClick {
    background-color: royalblue;
  }
  .leaveClick {
    background-color: orangered;
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 150px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #eee;
  background-color: ${(props) => props.color || "black"};
  font-size: 1.4em;
  font-weight: bold;
  color: white;

  &:hover {
    filter: brightness(0.8);
    transform: translateY(2%) translateX(2%);
    cursor: pointer;
  }
`;

const Say = () => {
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("black");
  const onClickEnter = () => setMessage("안녕하세요~~");
  const onClickLeave = () => setMessage("안녕히 가세요~~");
  // message와 value의 값이 바뀔 때 마다 리렌더링 되는 구조
  // too many rendering -> 즉시 함수 호출 시 나타나는 에러

  return (
    <Container>
      <ButtonContainer>
        <Button className="enterClick" onClick={onClickEnter}>
          입장
        </Button>
        <Button onClick={onClickLeave}>퇴장</Button>
      </ButtonContainer>
      <h1 style={{color: value}}>{message}</h1>
      {/* message 값을 h1에 표현하고 h1의 스타일 color 값을 value 값에 대입한 형태 */}
      {/* 구조 분해를 한번 더 함 - 객체로 받지 않기 위해서 */}
      <ButtonContainer>
        <Button color="red" onClick={() => setValue("red")}>
          빨간색
        </Button>
        {/* 즉시 실행하면 값이 적용이 안됨 -> 익명의 함수로 등록해서 실행해야지 값이 적용됨 */}
        {/* 함수의 호출과 등록이 다르다? */}
        <Button color="green" onClick={() => setValue("green")}>
          초록색
        </Button>
        <Button color="blue" onClick={() => setValue("blue")}>
          파란색
        </Button>
      </ButtonContainer>
    </Container>
  );
};
export default Say;
