'use client'

import './input.styles.scss'
import { getTheLength } from './utils'

interface InputProps {
    placeholder: string,
    isActive?: boolean,
    isWrong?: boolean,
    isCorrect?: boolean,
    value?: string,
    onChange: (value: string) => void,
}

export function Input ({ placeholder, isActive, isWrong, isCorrect, value = '', onChange }: InputProps) {
    const width = getTheLength(placeholder)
    const isWrongClass = isWrong ? 'wrong' : ''
    const isCorrectClass = isCorrect ? 'correct' : ''
    const className = `input ${isWrongClass} ${isCorrectClass}`
    
    return (
        <div 
            data-testid='component-input' 
            className={className}>
            <input 
                type="text" 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                maxLength={1}
                style={{ width }} 
                placeholder={placeholder}
                disabled={!isActive}
            />
            {isActive && <div className='active' style={{ width }}/>}
        </div>
    )
}