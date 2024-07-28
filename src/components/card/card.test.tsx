import '@testing-library/jest-dom'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { Card } from ".";

describe('Card', () => {
    const text = 'text'

    test('should render the component with the text', () => {
        render(<Card>{text}</Card>)
        expect(screen.findByText(text)).toBeDefined()
    })
})