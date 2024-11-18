import styled from "styled-components";

const HeadStyle = styled.h1`
  font-size: 2em;
  color: royalblue;
  text-align: center;
`;

const HeadLine = ({title}) => {
  return (
    <>
      <HeadStyle>기사 제목 : {title}</HeadStyle>
    </>
  );
};

const Contents = ({description}) => {
  return (
    <>
      <p>본문 내용 : {description}</p>
    </>
  );
};

const NewsDate = ({date}) => {
  return (
    <>
      <p>기사 날짜 : {date}</p>
    </>
  );
};

const Article = ({data}) => {
  return (
    <>
      <HeadLine title={data.title} />
      <Contents description={data.description} />
      <NewsDate date={data.date} />
    </>
  );
};

export default Article;
