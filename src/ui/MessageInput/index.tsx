import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import media from "../../styles/media";
import colors from "../../styles/colors";
import Input from "./Input";

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 16px;
  border-top: 1px solid ${() => colors.borderGrey};
  display: flex;
  flex-direction: column;
`;

interface Props {
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  children: (api: API) => ReactNode;
}

type API = ReturnType<MessageInput["getApi"]>;

type State = Readonly<typeof initialState>;
const initialState = { value: "" };

class MessageInput extends React.Component<Props, State> {
  readonly state = initialState;

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
    this.props.onChange(event.target.value);
  };
  private handleSubmit = () => {
    if (this.state.value.length > 0) {
      this.props.onSubmit(this.state.value);
      this.setState({ value: "" });
    }
  };
  private getApi() {
    return {
      value: this.state.value,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    };
  }
  render() {
    const { children } = this.props;

    if (!isFunction(children)) {
      throw new Error("children is mandatory and needs to be a function.");
    }

    return <Wrapper>{children(this.getApi())}</Wrapper>;
  }
}

const isFunction = <T extends Function>(value: any): value is T =>
  typeof value === "function";

export default MessageInput;
