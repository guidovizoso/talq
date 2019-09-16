import React, { useState } from "react";
import styled from "styled-components";
import media from "../../styles/media";
import colors from "../../styles/colors";

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 16px;
  border-top: 1px solid ${() => colors.borderGrey};
`;

interface Props {
  children?: JSX.Element[] | JSX.Element;
}

const MessageInput: React.FC<Props> = (props: Props) => {
  const [message, setMessage] = useState("");
  const handleOnChange = (value: string) => {
    setMessage(value);
  };

  return (
    <Wrapper>
      <input
        value={message}
        onChange={e => handleOnChange(e.target.value)}
        placeholder="Type a message..."
      />
    </Wrapper>
  );
};

export default MessageInput;
