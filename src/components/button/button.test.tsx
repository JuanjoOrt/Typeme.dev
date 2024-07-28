import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from ".";

describe('Button', () => {
    const text = 'text'
    const fn = jest.fn()

    test('should print the text', () => {
        render(<Button onClick={fn}>{text}</Button>)
        expect(screen.findByText(text)).toBeDefined()
    })

    test('should onClick works', async () => {
        render(<Button onClick={fn}>{text}</Button>)
        const button = await screen.findByText(text) 
        fireEvent.click(button);
        expect(fn).toHaveBeenCalled();
    })
})