import styled from "styled-components";
import {useEffect, useState} from "react";

const Table = styled.table`
  border-collapse: collapse;
  background-color: antiquewhite;
  margin: 0 auto;
  th,
  td {
    border: 1px solid #ccc;
    padding: 4px 8px;
  }
  th {
    background-color: royalblue;
    color: white;
  }
`;

const responseData = [
  {
    id: 1,
    name: "민지",
    addr: "서울시 강남구 신사동",
  },
  {
    id: 2,
    name: "하니",
    addr: "서울시 강남구 역삼동",
  },
  {
    id: 3,
    name: "해린",
    addr: "서울시 강남구 청담동",
  },
  {
    id: 4,
    name: "다니엘",
    addr: "서울시 강남구 삼성동",
  },
  {
    id: 5,
    name: "혜인",
    addr: "서울시 강남구 선릉동",
  },
];
// map을 돌릴 때는 key 값으로 삼을만한 유일한 값이 있어야함
const TableMap = () => {
  const [memberData, setMemberData] = useState([]);

  useEffect(() => {
    // 이 때 서버와 비동기 통신이 일어남 (axios 비동기 통신?)
    // responseData가 서버에서 들어오는 데이터 -> useEffect 물릴 때 데이터 받게됨
    // 지금은 mount 시점에서 처음 1회 받게 됨
    // 이를 다른 방식으로 활용하면 어떤 함수나 어떤 기능을 수행할 때 useEffect를 사용하면
    // 원하는 결과 얻을 수 있음 -> [ ] 사이에  추가적인 설정을 통해서
    setMemberData(responseData);
  }, []);

  const handleTableRowClick = (item) => {
    console.log(item);
  };
  return (
    <>
      <Table>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>주소</th>
        </tr>
        {memberData && // 조건문 없으면 서버 죽음
          memberData.map((member, index) => (
            <tr key={index} onClick={() => handleTableRowClick(member)}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.addr}</td>
            </tr>
          ))}
      </Table>
    </>
  );
};
export default TableMap;
