import { render, screen } from '@testing-library/react';
import Page from '.';


test('should render a image with alt', async () => {
        render(<Page>Page</Page>);
        const page = await  screen.findByText('Page') ;
        expect(page).toHaveClass('container');
});