import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import PhotoViewer from './PhotoViewer';

const mockPhoto = {
    id: 1,
    title: 'title',
    thumbnailUrl: 'thumbnailUrl',
    url: '1',
}

describe('PhotoViewer component', () => {
    test('PhotoViewer  is rendered ', () => {
        render(<PhotoViewer title={mockPhoto.title} url={mockPhoto.url} id={mockPhoto.id} />);
        const textElement = screen.getByText(mockPhoto.title + ' ' + mockPhoto.id);
        expect(textElement).toBeInTheDocument();
        const imgElement = screen.getByAltText(mockPhoto.title);
        expect(imgElement).toBeInTheDocument();
    });
});
