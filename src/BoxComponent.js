import styled from "styled-components";

const BoxStyle = styled.div`
  width: 300px;
  color: white;
  border-radius: 10px;
  background-color: royalblue;
  border: 1px solid black;
  font-size: 1.4em;
  text-align: center;
  margin-bottom: 10px;
  padding: 10px;
  margin: auto;
  margin-bottom: 10px;
`;

const BoxComponent = ({children}) => {
  return <BoxStyle>{children}</BoxStyle>;
};
export default BoxComponent;
