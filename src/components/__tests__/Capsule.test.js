import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import {jest} from "@jest/globals";
import { act } from "react-dom/test-utils"; // Import act from react-dom/test-utils
import Capsule from "../Capsule";

jest.mockModule("axios"); // Mock the axios module

const mockData = {
  // __esModule:true,
  result: {
    data: [
      {
        capsule_serial: "C001",
        details: "Sample details",
        status: "active",
        type: "Dragon 1.0",
        original_launch: "2022-01-01",
      },
      // Add more mock data as needed
    ],
  },
};

describe("Capsule component", () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce(mockData); // Mock the axios GET request
  });

  test("renders Capsule component", async () => {
    // Render the component
    await act(async () => {
      render(<Capsule />);
    });

    // Wait for the component to fetch data
    await screen.findByText("Loading...");

    // Check if the component renders data
    expect(screen.getByText("Capsules result")).toBeInTheDocument();
    expect(screen.getByText("Capsule S/N: C001")).toBeInTheDocument();
    expect(screen.getByText("Details: Sample details")).toBeInTheDocument();
    expect(screen.getByText("Status: active")).toBeInTheDocument();
    expect(screen.getByText("Type: Dragon 1.0")).toBeInTheDocument();
    expect(screen.getByText("Original Launch: Jan 1st 2022")).toBeInTheDocument();
  });

  // Add more tests as needed, for example, testing pagination, modal functionality, etc.
});
