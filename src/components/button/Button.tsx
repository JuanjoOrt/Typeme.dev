import './button.styles.scss'

interface Button {
    children: React.ReactNode | string,
    onClick: () => void,
    type?: 'primary' | 'ghost'
}

export default function Button ({ children, onClick, type = 'primary' }: Button) {
    return <button className={`button ${type}`} onClick={onClick}>{children}</button>
}