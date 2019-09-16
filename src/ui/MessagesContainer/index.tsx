import React, { useRef, useMemo, useEffect } from "react";
import styled from "styled-components";
import media from "../../styles/media";
import colors from "../../styles/colors";

const Scroll = styled.div`
  min-height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  flex: 1;
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
  display: flex;
  justify-content: flex-end;
`;

interface Props {
  children?: JSX.Element[] | JSX.Element;
}

const MessagesContainer: React.FC<Props> = (props: Props) => {
  let scrollRef = useRef<HTMLDivElement>(null);

  let scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => scrollToBottom(), [props.children]);

  return (
    <Wrapper>
      <Scroll>{props.children}</Scroll>
      <div style={{ float: "left", clear: "both" }} ref={scrollRef}></div>
    </Wrapper>
  );
};

export default MessagesContainer;
