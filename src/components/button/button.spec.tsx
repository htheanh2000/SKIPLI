import { render, screen } from '@testing-library/react';
import Button from '.';


test('should render a primary(default) button with the class of button, button--primary, button--md', async () => {
        render(<Button/>);
        const button = await  screen.findByRole('button') ;
        expect(button).toHaveClass('button')
        expect(button).toHaveClass('button--primary')
        expect(button).toHaveClass('button--md')
});

test('should render a secondary button with the class of button, button--secondary, button--md', async () => {
        render(<Button type='secondary'/>);
        const button = await  screen.findByRole('button') ;
        expect(button).toHaveClass('button')
        expect(button).toHaveClass('button--secondary')
        expect(button).toHaveClass('button--md')
});

test('should render a primary/lg button with the class of button, button--primary, button--lg', async () => {
        render(<Button size='lg'/>);
        const button = await  screen.findByRole('button') ;
        expect(button).toHaveClass('button')
        expect(button).toHaveClass('button--primary')
        expect(button).toHaveClass('button--lg')
});

test('should render a secondary/lg button with the class of button, button--secondary, button--lg', async () => {
        render(<Button type='secondary' size='lg'/>);
        const button = await  screen.findByRole('button') ;
        expect(button).toHaveClass('button')
        expect(button).toHaveClass('button--secondary')
        expect(button).toHaveClass('button--lg')
});

