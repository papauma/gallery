import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import PageTitle from './PageTitle';

const texto = 'title';
const cssDescription = 'pageTitle';

describe('PageTitle component', () => {
    test('PageTitle is rendered', () => {
      render(<PageTitle text={texto} />);
      const linkElement = screen.getByText(texto);
      expect(linkElement).toBeInTheDocument();
    });

    test('PageTitle has true class CSS', () => {
      const { container } =  render(<PageTitle text={texto}  />);
      const divElement = container.firstChild;
      expect(divElement).toHaveClass(cssDescription);
    });
});
