import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

interface WrapperProps {
  readonly message: string;
  readonly color?: string;
  readonly position: string;
  readonly groupStatus: { grouped: boolean; first: boolean; last: boolean };
}

const borderRadiusCalculator = (
  groupStatus: { grouped: boolean; first: boolean; last: boolean },
  position: string
) => {
  let upperLeft = 16;
  let upperRight = 16;
  let lowerRight = 16;
  let lowerLeft = 16;

  if (position === "left" && groupStatus.last) lowerLeft = 4;
  if (position === "right" && groupStatus.last) lowerRight = 4;

  return `border-radius: ${upperLeft}px ${upperRight}px ${lowerRight}px ${lowerLeft}px `;
};

const ColorBackground = styled.div<WrapperProps>`
  ${props =>
    `background-color: ${
      props.position === "left" ? props.color : colors.lightGrey
    }`};
  ${props =>
    `color: ${props.position === "left" ? colors.white : colors.black}`};
  ${props => borderRadiusCalculator(props.groupStatus, props.position)};
  padding: 12px 16px;
  font-size: 1rem;
`;

const Wrapper = styled.div<WrapperProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin-bottom: 2px;
  ${props =>
    `justify-content: ${
      props.position === "left" ? "flex-start;" : "flex-end"
    }`};
`;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

interface SenderProps {
  senderName?: string;
  senderPic?: string;
  position: string;
}

const SenderName = styled.span<SenderProps>`
  font-size: 0.7rem;
  color: ${() => colors.textGrey};
  ${props => `text-align: ${props.position}`};
  margin-bottom: 4px;
`;

interface Props {
  message: string;
  color?: string;
  position: "left" | "right";
  showSenderName: boolean;
  showSenderPic: boolean;
  senderName?: string;
  senderPic?: string;
  groupStatus: { grouped: boolean; first: boolean; last: boolean };
}

const Message: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper
      message={props.message}
      color={props.color}
      position={props.position}
      groupStatus={props.groupStatus}
    >
      <Container>
        {props.showSenderName && props.senderName && props.groupStatus.first ? (
          <SenderName
            position={props.position}
            senderName={props.senderName}
            senderPic={props.senderPic}
          >
            {props.senderName}
          </SenderName>
        ) : null}
        <ColorBackground
          message={props.message}
          color={props.color}
          position={props.position}
          groupStatus={props.groupStatus}
        >
          <span>{props.message}</span>
        </ColorBackground>
      </Container>
    </Wrapper>
  );
};

Message.defaultProps = {
  message: "Message",
  color: colors.primary,
  position: "left",
  groupStatus: { grouped: false, first: false, last: false }
};

export default Message;
