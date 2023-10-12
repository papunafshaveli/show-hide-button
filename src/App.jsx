import { useState } from "react";

import "./App.css";
import ToggleButton from "./component/ToggleButton";
import styled from "styled-components";

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <MainDiv>
      <ToggleButton textAppear={showText} setTextappear={setShowText} />
      {showText ? <WelcomeText>Welcome to React Challenges</WelcomeText> : null}
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const WelcomeText = styled.h1`
  font-size: 50px;
  font-weight: 900;
`;
export default App;
