import React, { useRef, useMemo, useEffect } from "react";
import styled from "styled-components";
import media from "../../styles/media";
import colors from "../../styles/colors";
import Message from "../Message";

const Scroll = styled.div`
  width: 100%;
  margin-top: auto;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`;

interface Props {
  children?: JSX.Element[] | JSX.Element;
  messages: Array<{ message: string; position: string; key: string }>;
  showSenderName: boolean;
  showSenderPic: boolean;
}

const MessagesContainer: React.FC<Props> = (props: Props) => {
  let scrollRef = useRef<HTMLDivElement>(null);

  let scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => scrollToBottom(), [props.children]);
  useEffect(() => scrollToBottom(), [props.messages]);

  const calculateGroup = (
    prevMessage: any,
    nextMessage: any,
    currentMessage: any
  ) => {
    let firstOfGroup = false;
    let lastOfGroup = false;
    let inGroup = false;

    if (!prevMessage || prevMessage.position !== currentMessage.position)
      firstOfGroup = true;
    if (!nextMessage || nextMessage.position !== currentMessage.position)
      lastOfGroup = true;
    if (
      prevMessage &&
      nextMessage &&
      prevMessage.position === currentMessage.position &&
      nextMessage.position === currentMessage.position
    )
      inGroup = true;

    return { grouped: inGroup, first: firstOfGroup, last: lastOfGroup };
  };

  return (
    <Wrapper>
      {props.children && !props.messages && <Scroll>{props.children}</Scroll>}
      {!props.children && props.messages && (
        <Scroll>
          {props.messages.map((m: any, index: number) => {
            let groupStatus = calculateGroup(
              props.messages[index - 1],
              props.messages[index + 1],
              m
            );
            return (
              <Message
                key={m.key}
                message={m.message}
                position={m.position}
                color={m.color}
                showSenderName={props.showSenderName}
                showSenderPic={props.showSenderPic}
                senderName={m.senderName}
                senderPic={m.senderPic}
                groupStatus={groupStatus}
              />
            );
          })}
        </Scroll>
      )}
      <div
        style={{ clear: "both", position: "absolute", bottom: 0 }}
        ref={scrollRef}
      ></div>
    </Wrapper>
  );
};

export default MessagesContainer;
