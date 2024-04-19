'use client'
import './layout.scss'
import { Sidebar } from './Sidebar'

export function Layout({
    children,
  }: {
    children: React.ReactNode
}) {
    return (
        <div className="layout">
            <Sidebar customClass="layout__aside" />
            <main className="layout__main">{children}</main>
        </div>
    )
  }