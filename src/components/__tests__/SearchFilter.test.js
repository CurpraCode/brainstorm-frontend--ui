/* eslint-disable no-undef */

import { render, fireEvent, screen } from "@testing-library/react";
import SearchFilter from "../SearchFilter";

describe("SearchFilter component", () => {
  it("should call onSearch with the correct filters when inputs are changed", () => {
    // Mock onSearch function
    const mockOnSearch = jest.fn();

    // Render the SearchFilter component
    render(<SearchFilter onSearch={mockOnSearch} />);

    // Simulate user input
    fireEvent.change(screen.getByTestId("serial-input"), { target: { value: "123" } });
    fireEvent.change(screen.getByTestId("status-select"), { target: { value: "retired" } });
    fireEvent.change(screen.getByTestId("type-select"), { target: { value: "Dragon 1.0" } });

    // Ensure onSearch is called with the correct filters
    expect(mockOnSearch).toHaveBeenCalledWith({
      serial: "123",
      status: "retired",
      type: "Dragon 1.0",
    });
  });

  it("should call onSearch with the correct filters when inputs are changed", () => {
    // Mock onSearch function
    const mockOnSearch = jest.fn();

    // Render the SearchFilter component
    render(<SearchFilter onSearch={mockOnSearch} />);

    // Simulate user input
    fireEvent.change(screen.getByTestId("serial-input"), { target: { value: "456" } });
    fireEvent.change(screen.getByTestId("status-select"), { target: { value: "active" } });
    fireEvent.change(screen.getByTestId("type-select"), { target: { value: "Dragon 2.0" } });

    // Ensure onSearch is called with the correct filters
    expect(mockOnSearch).toHaveBeenCalledWith({
      serial: "456",
      status: "active",
      type: "Dragon 2.0",
    });
  });
});
