import {useEffect, useState} from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: 1px solid black;
`;

const Print = ({name, job, companyName, companyAddr, email, phone}) => {
  return (
    <>
      <p>{name}</p>
      <p>{job}</p>
      <p>{companyName}</p>
      <p>{companyAddr}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </>
  );
};

const Setup = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddr, setCompanyAddr] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [showPrint, setShowPrint] = useState(false);

  const onChangeName = (e) => setName(e.target.value);
  const onChangeJob = (e) => setJob(e.target.value);
  const onChangeCompanyName = (e) => setCompanyName(e.target.value);
  const onChangeCompanyAddr = (e) => setCompanyAddr(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);

  const onClick = () => {
    setShowPrint(true);
  };
  return (
    <>
      <Container>
        <Input type="text" value={name} onChange={onChangeName} />
        <Input type="text" value={job} onChange={onChangeJob} />
        <Input type="text" value={companyName} onChange={onChangeCompanyName} />
        <Input type="text" value={companyAddr} onChange={onChangeCompanyAddr} />
        <Input type="text" value={email} onChange={onChangeEmail} />
        <Input type="text" value={phone} onChange={onChangePhone} />
        <button onClick={onClick}>입력</button>
      </Container>
      {showPrint && (
        <Print
          name={name}
          job={job}
          companyName={companyName}
          companyAddr={companyAddr}
          email={email}
          phone={phone}
        />
      )}
    </>
  );
};
export default Setup;
