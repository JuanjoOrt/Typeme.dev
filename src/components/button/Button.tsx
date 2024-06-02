import React from "react"


interface Button {
    children: React.ReactNode | string
}

export default function Button ({ children }: Button) {
    return <button>{children}</button>
}