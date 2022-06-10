// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Button } from "../components/style-component";

describe("Testing the color of the btn", () => {
  test("Black", () => {
    // Arrange
    const color = "#000000";
    const expectedStyle = "background: " + "#000000";
    // Act
    const { getByText } = render(<Button bg={color}>Continue</Button>);
    // Assert
    expect(getByText("Continue")).toHaveStyle(expectedStyle);
  });
});
