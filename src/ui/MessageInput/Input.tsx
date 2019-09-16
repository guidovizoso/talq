import React, { useState } from "react";
import styled from "styled-components";
import media from "../../styles/media";
import colors from "../../styles/colors";

const TextInput = styled.input`
  border: none;
  padding: 8px 16px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 1rem;
  border: 1px solid ${() => colors.borderGrey};
  transition: all 0.3s;

  &:focus {
    outline: none;
    border: 1px solid ${() => colors.primary};
  }
`;

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

interface KeyboardEvent {
  key: string;
}

const Input: React.FC<Props> = (props: Props) => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onSubmit();
    }
  };
  return (
    <TextInput
      value={props.value}
      onChange={props.onChange}
      onKeyPress={handleKeyPress}
      placeholder="Type a message..."
    />
  );
};

export default Input;
