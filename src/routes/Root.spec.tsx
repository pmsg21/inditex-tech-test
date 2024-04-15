import { render, screen } from "@testing-library/react";
import { Root } from "./Root";
import type { ReactElement, ReactNode } from "react";
import { createElement } from "react";

jest.mock("react-router-dom", () => ({
  Outlet: jest.fn(),
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

jest.mock("../hooks/useLoader", () => ({
  useLoader: jest.fn().mockReturnValue({
    isLoading: true,
  }),
}));

jest.mock("../assets/loader.gif", () => "test-loader.gif");

describe("Root", () => {
  it("should render without errors", () => {
    render(<Root />);

    expect(screen.getByText("Podcaster")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
