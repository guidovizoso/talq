import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Container from "./index";

test("shows the children inside Container", () => {
  const testMessage = () => <span>Test message</span>;
  const { queryByText, getByLabelText, getByText } = render(
    <Container>{testMessage()}</Container>
  );

  expect(getByText("Test message")).toBeInTheDocument();
});
