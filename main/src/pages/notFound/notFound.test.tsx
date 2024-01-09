import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom'

import NotFound from './notFound';

describe('NotFound page', () => {
    test('NotFound is rendered', () => {
      const text = 'Page not found.';
      render(<NotFound />);
      const linkElement = screen.getByText(text);
      expect(linkElement).toBeInTheDocument();
    });
});
