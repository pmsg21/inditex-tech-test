import { render, screen, act } from "@testing-library/react";
import type { ReactElement } from "react";
import { useContext } from "react";
import { LoaderContext, LoaderContextProvider } from "./LoaderContext";

const MockChildComponent = (): ReactElement => {
  const { isLoading, handleIsLoadingChange } = useContext(LoaderContext);
  return (
    <div>
      <span>Is Loading: {isLoading ? "true" : "false"}</span>
      <button onClick={() => handleIsLoadingChange(true)}>Start Loading</button>
      <button onClick={() => handleIsLoadingChange(false)}>Stop Loading</button>
    </div>
  );
};

describe("LoaderContextProvider", () => {
  it("should render children and provide loader context", () => {
    render(
      <LoaderContextProvider>
        <MockChildComponent />
      </LoaderContextProvider>,
    );

    expect(screen.getByText("Is Loading: false")).toBeInTheDocument();

    const startLoadingButton = screen.getByText("Start Loading");
    const stopLoadingButton = screen.getByText("Stop Loading");

    expect(startLoadingButton).toBeInTheDocument();
    expect(stopLoadingButton).toBeInTheDocument();

    act(() => {
      startLoadingButton.click();
    });
    expect(screen.getByText("Is Loading: true")).toBeInTheDocument();

    act(() => {
      stopLoadingButton.click();
    });
    expect(screen.getByText("Is Loading: false")).toBeInTheDocument();
  });
});
