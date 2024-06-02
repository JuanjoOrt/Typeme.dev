import React from "react"
import './button.styles.scss'

interface Button {
    children: React.ReactNode | string,
    onClick: () => void
}

export default function Button ({ children, onClick }: Button) {
    return <button className='button' onClick={onClick}>{children}</button>
}