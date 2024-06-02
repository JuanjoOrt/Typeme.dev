import './card.styles.scss'

interface Card {
    children: React.ReactNode | string
}

export default function Card ({ children }: Card) {
    return (
        <div className='card'>
            {children}
        </div>
    )
}