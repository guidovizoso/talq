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
  border-radius: 4px;
  box-shadow: 0px 13px 21px -10px rgba(0, 0, 0, 0.3);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

interface Props {
  children?: JSX.Element[] | JSX.Element;
  fluid: boolean;
  width: string;
  height: string;
}

const ChatBox: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper fluid={props.fluid} width={props.width} height={props.height}>
      {props.children}
    </Wrapper>
  );
};

ChatBox.defaultProps = {
  fluid: false,
  width: "400px",
  height: "400px"
};

export default ChatBox;
