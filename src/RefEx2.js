import {useRef, useEffect} from "react";

const InnerValueKeep = () => {
  const myButtonRef = useRef(null); // 특정한 DOM의 위치를 가리키키 위해서 사용

  useEffect(() => {
    if (myButtonRef.current) {
      myButtonRef.current.innerText = "클릭하세요";
    }
  }, []);
  // current -> 값을 유지하기 위한 매개체

  // 컴포넌트 내부 변수값 유지 -> useRef 값은 useState와 다르게 변수.current에 들어가게 됨
  const count = useRef(0);

  const handleClick = () => {
    count.current += 1;
    alert(`클릭 횟수 : ${count.current}`);
  };

  return (
    <>
      <button ref={myButtonRef} onClick={handleClick}>
        확인
      </button>
    </>
  );
};
export default InnerValueKeep;
