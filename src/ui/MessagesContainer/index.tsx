import React from "react";
import styled from "styled-components";
import media from "../../styles/media";
import colors from "../../styles/colors";

const Scroll = styled.div`
  min-height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 16px;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  overflow: auto;
  flex-grow: 1;
  min-height: 0;
`;

interface Props {
  children?: JSX.Element[] | JSX.Element;
}

const MessagesContainer: React.FC<Props> = (props: Props) => {
  let textInput = null;

  function handleClick() {
    textInput.focus();
  }
  return (
    <Wrapper>
      <Scroll>{props.children}</Scroll>
      <div
        style={{ float: "left", clear: "both" }}
        ref={input => {
          textInput = input;
        }}
      ></div>
    </Wrapper>
  );
};

export default MessagesContainer;
