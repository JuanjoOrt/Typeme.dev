import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { Button } from ".";

describe('Button', () => {
    const text = 'text'
    const fn = vi.fn()

    afterEach(() => {
        cleanup();
    });

    it('should print the text', () => {
        render(<Button>{text}</Button>)
        expect(screen.findByText(text)).toBeDefined()
    })

    it('should onClick works', async () => {
        render(<Button onClick={fn}>{text}</Button>)
        const button = await screen.findByText(text) 
        fireEvent.click(button);
        expect(fn).toHaveBeenCalled();
    })
})