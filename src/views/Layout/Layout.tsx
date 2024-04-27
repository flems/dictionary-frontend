'use client'
import './layout.scss'
import { Aside } from '@/views/Aside/Aside'

interface ILayout {
    aside?: boolean
    children: React.ReactNode
}

export function Layout({
    aside,
    children,
}: ILayout) {
    const addClass = aside ? 'layout--with-aside' : ''
    return (
        <div className={`layout ${addClass}`}>
            <Aside customClass="layout__aside" />
            <main className="layout__main">{children}</main>
        </div>
    )
}