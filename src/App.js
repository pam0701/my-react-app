import { useState } from "react";
import TopHeader from "./components/TopHeader";
import ImgComponent from "./components/ImgComponent";
import BtnToNaver from "./components/BtnToNaver";
import ClassState from "./components/ClassState";
import FuntionalState from "./components/FunctionalState";
import StatePractice from "./components/StatePractice";
import CounterComponent from "./components/CounterComponent";
import CustomList from "./components/CustomList";
import ChangeObj from "./components/ChangeObj";
import CustomObj from "./components/CustomObj";
import TestCss from "./components/TestCss";
import TestStyled from "./components/TestStyled";
import ConditionalRender from "./components/ConditionalRender";
import TestUseEffect from "./components/TestUseEffect";
import Timer from "./components/Timer";
import PracticeTimer from "./components/PracticeTimer";
import TestUseMemo from "./components/TestUseMemo";
import UsingUseMemo from "./components/UsingUseMemo";
import Image from "./components/Image";
import WelcomeDialog from "./components/WelcomeDialog";
import FancyBorder from "./components/FancyBorder";

function App() {
  return (
    <div className="App">
      <FancyBorder color="blue">
        <WelcomeDialog />
      </FancyBorder>
    </div>
  );
}

/* function App() {
  return (
    <div className="App">
      <FancyBorder color="blue">
        <h1>Hello, props.children</h1>
        <p>이건 매우 유용한 기술입니다요!</p>
      </FancyBorder>
    </div>
  );
} */

/* function App() {
  return (
    <div className="App">
      <Image />
    </div>
  );
} */

/* function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {show && <Timer />}
      <button onClick={() => setShow(!show)}>보이기</button>
    </div>
  );
} */

/* function App() {
  const [condition, setCondition] = useState("보이기");
  const onChange = () => {
    condition === "보이기" ? setCondition("감추기") : setCondition("보이기");
  };
  return (
    <div className="App">
      {condition === "감추기" && <ConditionalRender />}
      <button onClick={onChange}>{condition}</button>
    </div>
  );
} */
/* function App() {
  const pororoObj = [
    {
      name: "뽀로로",
      age: 5,
      nickname: "사고뭉치",
    },
    {
      name: "루피",
      age: 4,
      nickname: "공주님",
    },
    {
      name: "크롱이",
      age: 5,
      nickname: "장난꾸러기",
    },
  ];
  return (
    <div className="App">
      <CustomObj obj={pororoObj} />
    </div>
  );
} */

/* function App() {
  const nameArr = ["뽀로로", "루피", "크롱이"];
  return (
    <div className="App">
      <CustomList arr={nameArr} />
    </div>
  );
} */

/* function App() {
  return (
    <div className="App">
      <TopHeader />
      <ImgComponent />
      <BtnToNaver />
      <ClassState />
      <FuntionalState />
    </div>
  );
} */

/* function App() {
  return (
    <div className="App">
      <TopHeader text="Go to naver" name="klaus" href="http://naver.com" />
    </div>
  );
}
 */
export default App;
