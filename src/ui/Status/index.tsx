import React, { useRef, useMemo, useEffect } from "react";
import styled from "styled-components";
import media from "../../styles/media";
import colors from "../../styles/colors";

const Status = styled.span`
  font-size: 0.7rem;
  font-style: italic;
  color: ${() => colors.textGrey};
  padding: 0 16px;
`;

const Wrapper = styled.div`
  text-align: right;
`;

interface Props {
  text?: string;
}

const Component: React.FC<Props> = (props: Props) => {
  return <Wrapper>{props.text && <Status>{props.text}</Status>}</Wrapper>;
};

export default Component;
