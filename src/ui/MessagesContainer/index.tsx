import React, { useRef, useMemo, useEffect } from "react";
import styled from "styled-components";
import media from "../../styles/media";
import colors from "../../styles/colors";

const Scroll = styled.div`
  width: 100%;
  margin-top: auto;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 16px;
  display:  flex;
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
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

  console.log(props.children);

  return (
    <Wrapper>
      <Scroll>{props.children}</Scroll>
      <div style={{ clear: "both", position: "absolute", bottom: 0 }} ref={scrollRef}></div>
    </Wrapper>
  );
};

export default MessagesContainer;
