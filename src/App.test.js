import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the hero heading and section landmarks", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { level: 1, name: /shrinish vhanbatte/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", { name: /competitions & honors/i })
  ).toBeInTheDocument();
});
