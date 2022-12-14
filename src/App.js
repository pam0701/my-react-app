import { Link } from "react-router-dom";
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
/* import TestUseEffect from "./components/TestUseEffect"; */
import Timer from "./components/Timer";
import PracticeTimer from "./components/PracticeTimer";
import TestUseMemo from "./components/TestUseMemo";
import UsingUseMemo from "./components/UsingUseMemo";
import Image from "./components/Image";
import WelcomeDialog from "./components/WelcomeDialog";
import FancyBorder from "./components/FancyBorder";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Board from "./components/Board";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import BoardDetail from "./components/BoardDetail";
import SignUpDialog from "./components/SignUpDialog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="profile" element={<Profile />} />
        <Route path="board/" element={<Board />} />
        <Route path="board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

/* function App() {
  return (
    <div className="App">
      <FancyBorder color="red">
        <Dialog
          color="orange"
          title={<button onClick={() => alert("Welcome!")}>?????? ??????!</button>}
          message="?????? ????????? ????????? ????????? ?????????"
        >
          <a href="#">?????? ?????? ???????????? ??????</a>
        </Dialog>
      </FancyBorder>
    </div>
  );
} */

/* function App() {
  return (
    <div className="App">
      <FancyBorder color="blue">
        <h1>Hello, props.children</h1>
        <p>?????? ?????? ????????? ??????????????????!</p>
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
      <button onClick={() => setShow(!show)}>?????????</button>
    </div>
  );
} */

/* function App() {
  const [condition, setCondition] = useState("?????????");
  const onChange = () => {
    condition === "?????????" ? setCondition("?????????") : setCondition("?????????");
  };
  return (
    <div className="App">
      {condition === "?????????" && <ConditionalRender />}
      <button onClick={onChange}>{condition}</button>
    </div>
  );
} */
/* function App() {
  const pororoObj = [
    {
      name: "?????????",
      age: 5,
      nickname: "????????????",
    },
    {
      name: "??????",
      age: 4,
      nickname: "?????????",
    },
    {
      name: "?????????",
      age: 5,
      nickname: "???????????????",
    },
  ];
  return (
    <div className="App">
      <CustomObj obj={pororoObj} />
    </div>
  );
} */

/* function App() {
  const nameArr = ["?????????", "??????", "?????????"];
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
