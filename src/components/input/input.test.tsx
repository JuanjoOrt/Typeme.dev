import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './Input'


describe('Input', () => {
    const fn = jest.fn()

    test('should render the component with the placeholder', () => {
        render(<Input placeholder="A" onChange={fn}/>)
        expect(screen.getByPlaceholderText('A')).toBeInTheDocument()
    })

    test('should apply the correct class if isCorrect', async () => {
        render(<Input placeholder="A" isCorrect onChange={fn}/>)
        const container = await screen.findByTestId('component-input');
        expect(container).toHaveClass('correct')
    })

    test('should apply the wrong class if isWrong', async () => {
        render(<Input placeholder="A" isWrong onChange={fn}/>)
        const container = await screen.findByTestId('component-input');
        expect(container).toHaveClass('wrong')
    })

    test("should be disabled if isn't is active", () => {
        render(<Input placeholder="A" onChange={fn}/>)
        expect(screen.getByPlaceholderText('A')).toBeDisabled()
    })

    test('should be available if is active', () => {
        render(<Input placeholder="A" isActive onChange={fn}/>)
        expect(screen.getByPlaceholderText('A')).not.toBeDisabled()
    })

    test('should have value if the value is passed', () => {
        render(<Input placeholder="A" value="B" onChange={fn}/>)
        expect(screen.getByPlaceholderText('A')).toHaveValue('B')
    })

    test('should onChange event works', () => {
        render(<Input placeholder="A" onChange={fn}/>)
        const input = screen.getByPlaceholderText('A')
        fireEvent.change(input, {
            target: { value: 'B' },
        });
        expect(fn).toHaveBeenCalledWith('B')
    })
})
