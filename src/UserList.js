import React, {useState} from "react";
import styled from "styled-components";
// 앱은 화면을 그려주는 리소스 (버튼, 인풋 박스 등등)가 이미 폰에 설치 되어 있음
// 앱은 주로 시스템의 기능을 많이 사용하는 경우는 앱이 유리
// 앱은 화면을 그려주는 요소가 HTML, CSS로 구성되어 있지 않음
// 웹으로 개발하면 배포가 자유로움, IOS, 안드로이드 동시 개발 시 개발 부담이 적음

const DivBox = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid black;
  margin: 20px auto;
  margin-bottom: 20px;
  background-color: orangered;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
`;

const data = [
  {
    id: 100,
    userName: "천지훈",
    email: "1000won@gmail.com",
  },
  {
    id: 200,
    userName: "백마리",
    email: "2000won@gmail.com",
  },
  {
    id: 300,
    userName: "서민혁",
    email: "3000won@gmail.com",
  },
];

const User = ({user}) => {
  return (
    <DivBox>
      <p>ID : {user.id}</p>
      <p>이름 : {user.userName}</p>
      <p>이메일 : {user.email}</p>
    </DivBox>
  );
};

const UserList = () => {
  return (
    <>
      {data && data.map((user, index) => <User key={index} user={user} />)}
      {data && data.map((user) => <User key={user.id} user={user} />)}
    </>
  );
};
export default UserList;

// export 를 여러 개 할 수 있음 -> 그 상황에서는 default 빼야 함
// export 된 것들 중 골라낼 수 있음

// Key값 대신 index를 넣을 수 있음
// 기존에는 user.id -> Primary Key라면 사용 가능
