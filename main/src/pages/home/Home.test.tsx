import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom'

import Home from './Home';

describe('Home page', () => {
    test('Home is rendered', () => {
      const text = 'Welcome to the Gallery.';
      render(<Home />);
      const linkElement = screen.getByText(text);
      expect(linkElement).toBeInTheDocument();
    });
});
