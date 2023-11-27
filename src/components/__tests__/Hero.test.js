import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

test("renders Hero component", () => {
  render(<Hero />);

  // Check if the component renders the SpaceX Explorer text
  expect(screen.getByText("SpaceX Explorer")).toBeInTheDocument();

  // Check if the navigation links are rendered
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Search")).toBeInTheDocument();

  // Check if the banner content is rendered
  expect(screen.getByText("SpaceX Capsule Explorer")).toBeInTheDocument();
  expect(
    screen.getByText("Explore SpaceX capsules and missions. Find information about launches, landings, and more.")
  ).toBeInTheDocument();

  // Check if the banner image is rendered
  const bannerImage = screen.getByAltText("SpaceX Banner");
  expect(bannerImage).toBeInTheDocument();
  expect(bannerImage.src).toBe("https://www.spacex.com/vehicles/starship/assets/images/Starbase_Desktop.jpg");
});

// Add more tests as needed, for example, testing navigation functionality
