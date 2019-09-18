import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

interface WrapperProps {
  readonly fluid: boolean;
  readonly width: string;
  readonly height: string;
}

const Wrapper = styled.div<WrapperProps>`
  box-sizing: border-box;
  ${props => `width: ${props.fluid ? "100%;" : `${props.width};`}`};
  ${props => `height: ${props.fluid ? "100%;" : `${props.height};`}`};
  border: 1px solid ${() => colors.borderGrey};
  background-color: ${() => colors.white};
  border-radius: 12px;
  box-shadow: 0px 13px 21px -10px rgba(0, 0, 0, 0.3);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

interface Props {
  children: JSX.Element[];
  fluid: boolean;
  width: string;
  height: string;
  showSenderName?: boolean;
  showSenderPic?: boolean;
}

const ChatBox: React.FC<Props> = (props: Props) => {

  return (
    <Wrapper fluid={props.fluid} width={props.width} height={props.height}>
      {props.children.map(child => {
        return React.cloneElement(child, {
          showSenderName: props.showSenderName,
          showSenderPic: props.showSenderPic
        });
      })}
    </Wrapper>
  );
};

ChatBox.defaultProps = {
  fluid: false,
  width: "400px",
  height: "400px",
  showSenderName: false,
  showSenderPic: false
};

export default ChatBox;
