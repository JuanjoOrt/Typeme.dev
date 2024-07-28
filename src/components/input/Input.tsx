'use client'

import './input.styles.scss'
import { getTheLength } from './utils'

interface InputProps {
    placeholder: string,
    active?: boolean
}



export function Input ({ placeholder, active }: InputProps) {
    const width = getTheLength(placeholder)
    
    return (
        <div className='input'>
            <input 
                type="text" 
                maxLength={1}
                style={{ width }} 
                placeholder={placeholder} 
            />
            {active && <div className='active' style={{ width }}/>}
        </div>
    )
}