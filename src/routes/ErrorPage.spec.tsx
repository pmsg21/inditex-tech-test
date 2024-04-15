import { render, screen } from "@testing-library/react";
import { ErrorPage } from "./ErrorPage";
import type { ReactElement, ReactNode } from "react";
import { createElement } from "react";

console.error = jest.fn();
jest.mock("react-router-dom", () => ({
  useRouteError: jest.fn().mockReturnValue(() => ({
    statusText: "Testing error",
    message: "Testing error",
  })),
  Link: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }): ReactElement => {
    const { to, ...restProps } = props;
    return createElement("a", { ...restProps, href: to }, children);
  },
}));

describe("ErrorPage", () => {
  it("should render without errors", () => {
    render(<ErrorPage />);

    expect(screen.getByText("Oops!")).toBeInTheDocument();
    expect(
      screen.getByText("Sorry, an unexpected error has occurred."),
    ).toBeInTheDocument();
    expect(screen.getByText("Back to homepage")).toBeInTheDocument();
  });
});
