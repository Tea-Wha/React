import Article from "./Article";

const data = [
  {
    title: "정치",
    description: "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ",
    date: "2024-11-13",
  },
  {
    title: "경제",
    description: "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ",
    date: "2024-11-13",
  },
  {
    title: "사회",
    description: "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ",
    date: "2024-11-13",
  },
  {
    title: "문화",
    description: "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ",
    date: "2024-11-13",
  },
];

const Articles = () => {
  return (
    <>
      <h1>오늘의 뉴스</h1>
      {data && data.map((e) => <Article data={e} />)}
    </>
  );
};
export default Articles;
