import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThumbnailButton from './ThumbnailButton';

const mockPhoto = {
    id: 1,
    title: 'title',
    thumbnailUrl: 'thumbnailUrl'
}

describe('ThumbnailButton component', () => {
    test('ThumbnailButton is rendered ', () => {
        render(<ThumbnailButton photo={mockPhoto} onClick={() => {}}/>);
        const linkElement = screen.getByAltText(mockPhoto.title);
        expect(linkElement).toBeInTheDocument();
    });

    test('ThumbnailButton is clicked ', async () => {
        const handleClick = jest.fn();
        render(<ThumbnailButton photo={mockPhoto} onClick={handleClick}/>);
        await userEvent.click(screen.getByAltText(mockPhoto.title));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
