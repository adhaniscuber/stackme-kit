import React from "react";
import { render } from "@testing-library/react";
import { BasicButtonGrid } from "./button-grid.composition";

describe("Button Grid component default state", () => {
  it("should render with the correct text", () => {
    const { getByText } = render(<BasicButtonGrid />);
    const rendered = getByText("hello from Button");
    expect(rendered).toBeTruthy();
  });
});
