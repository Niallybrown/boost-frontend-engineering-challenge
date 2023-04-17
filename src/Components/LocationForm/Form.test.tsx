import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LocationForm from "./LocationForm";

const getLocations = jest.fn();

describe("Form", () => {
  it("renders", () => {
    render(<LocationForm getLocations={getLocations} />);

    expect(screen.getByRole("form")).toBeTruthy();
  });

  it("calls getLocations when user submits the form", async () => {
    render(<LocationForm getLocations={getLocations} />);
    const locationInput = screen.getByTestId("locationInput");
    await fireEvent.change(locationInput, { target: { value: "a" } });
    await userEvent.type(locationInput, "{enter}");
    expect(getLocations).toBeCalled();
    expect(getLocations).toBeCalledWith("a");
  });

  it("calls getLocations with the value of the input field when user submits the form", async () => {
    render(<LocationForm getLocations={getLocations} />);
    const locationInput = screen.getByTestId("locationInput");
    await fireEvent.change(locationInput, { target: { value: "Berlin" } });
    await userEvent.type(locationInput, "{enter}");
    expect(getLocations).toBeCalled();
    expect(getLocations).toBeCalledWith("Berlin");
  });

  it("calls getLocations with the value of the input field clicks the search icon", async () => {
    render(<LocationForm getLocations={getLocations} />);
    const locationInput = screen.getByTestId("locationInput");
    await fireEvent.change(locationInput, { target: { value: "Paris" } });
    const searchIcon = screen.getByTestId("searchIcon");
    await fireEvent.click(searchIcon);
    expect(getLocations).toBeCalled();
    expect(getLocations).toBeCalledWith("Paris");
  });
});
