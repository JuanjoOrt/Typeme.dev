import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { Card } from ".";

describe('Card', () => {
    const text = 'text'

    it('should render the component with the text', () => {
        render(<Card>{text}</Card>)
        expect(screen.findByText(text)).toBeDefined()
    })
})