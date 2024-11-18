import "./App.css";
import JsxSyntax from "./JSX문법";
import GreetingComponent from "./GreetingComponent";
import WelcomeProps from "./WelcomeProps";
import Articles from "./Articles";
import MyComponent from "./MyComponent";
import BoxComponent from "./BoxComponent";
// 정수, boolean 값은 항상 객체로 전달해야 함

function App() {
  return (
    <>
      <MyComponent name="안유진" age={21} />
      <BoxComponent>첫 번째 박스 입니다.</BoxComponent>
      <BoxComponent>두 번째 박스 입니다.</BoxComponent>
    </>
  );
}

export default App;
