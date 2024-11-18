const Article = ({data}) => {
  return (
    <>
      <h1>기사 제목 : {data.title}</h1>
      <p>기사 내용 : {data.description}</p>
      <p>기사 날짜 : {data.date}</p>
    </>
  );
};

export default Article;
