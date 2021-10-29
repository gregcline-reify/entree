import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("should throw an error if id is empty", () => {
    expect(() =>
      render(
        <Input type="textarea" label="label" value="" id="" onChange={() => {}} />
      )).toThrow("ID must be populated");
  });

  it("should render an input type='text' with and attached label when type='text'", () => {
    render(<Input type="text" label="label" value="" id="label" onChange={() => {}} />);
    const input = screen.getByLabelText("label") // Implied assertion
    expect(input).toHaveAttribute("type", "text");
  });

  it("should render an textarea with an attached label when type='textarea'", () => {
    render(<Input type="textarea" label="label" value="" id="label" onChange={() => {}} />);
    const input = screen.getByLabelText("label"); // Implied assertion
    expect(input).toBeInstanceOf(HTMLTextAreaElement);
  });
})
