import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { jest } from "@jest/globals";
import type { ReactElement, ReactNode } from "react";
import { createElement } from "react";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn().mockReturnValue({
    navigate: jest.fn(),
  }),
  useParams: jest.fn().mockReturnValue({
    podcastId: "1",
    episodeId: "10",
  }),
  useRouteError: jest.fn().mockReturnValue(null),
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

afterEach(cleanup);
