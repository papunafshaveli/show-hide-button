import React from "react";
import styled from "styled-components";
//these are props
export default function ToggleButton({ textAppear, setTextappear }) {
  return (
    <div>
      {/* after clicking on Btn, props - setTextappear value should be opposite of  props - textAppear*/}
      <Btn onClick={() => setTextappear(!textAppear)}>Show / Hide</Btn>
    </div>
  );
}

const Btn = styled.button`
  padding: 25px 50px;
  color: black;
  background-color: purple;
  font-size: 40px;
  font-weight: 900;
  border-radius: 12px;
`;
