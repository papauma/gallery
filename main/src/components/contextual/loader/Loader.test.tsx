import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Loader from "./Loader";

const texto = 'Loading'
describe("Loader component", () => {
  it("renders without crashing", () => {
    render(<Loader />);
    const linkElement = screen.getByText(texto);
    expect(linkElement).toBeInTheDocument();
  });
});
