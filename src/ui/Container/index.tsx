import React from "react";
import styled from "styled-components";
import media from "../../styles/media";

interface ContainerProps {
  readonly padded?: boolean;
  readonly rigged?: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow: visible;

  ${props => `margin-right: ${props.rigged ? "max-width: 576px;" : ""}`};

  ${props =>
    props.padded
      ? `
        padding-left: 16px;
        padding-right: 16px;

        ${media.medium`
          padding-left: 0;
          padding-right: 0;
        `}
      `
      : ""};

  ${media.medium`
    padding-left: 0;
    padding-right: 0;
  `}
  ${media.large`
    max-width: 90%;
  `}
  ${media.wide`
    max-width: 1168px;
  `}
`;

interface Props {
  children?: JSX.Element[] | JSX.Element;
  padded?: boolean;
}

const Component: React.FC<Props> = (props: Props) => {
  return <Container>{props.children}</Container>;
};

export default Component;
