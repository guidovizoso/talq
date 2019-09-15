import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

interface WrapperProps {
  message: string;
  readonly color?: string;
  readonly position: string;
}

const ColorBackground = styled.div<WrapperProps>`
  ${props =>
    `background-color: ${props.position === "left" ? props.color : colors.lightGrey}`};
  ${props =>
    `color: ${props.position === "left" ? colors.white : colors.black}`};
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
`;

const Wrapper = styled.div<WrapperProps>`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
  ${props =>
    `justify-content: ${
      props.position === "left" ? "flex-start;" : "flex-end"
    }`};
`;

interface Props {
  message: string;
  color?: string;
  position: "left" | "right";
}

const Message: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper
      message={props.message}
      color={props.color}
      position={props.position}
    >
      <ColorBackground
        message={props.message}
        color={props.color}
        position={props.position}
      >
        <span>{props.message}</span>
      </ColorBackground>
    </Wrapper>
  );
};

Message.defaultProps = {
  message: "Message",
  color: colors.primary,
  position: "left"
};

export default Message;
