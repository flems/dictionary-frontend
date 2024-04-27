'use client'
import './layout.scss'
import { Aside } from '@/views/Aside/Aside'

export function Layout({
    children,
  }: {
    children: React.ReactNode
}) {
    return (
        <div className="layout">
            <Aside customClass="layout__aside" />
            <main className="layout__main">{children}</main>
        </div>
    )
  }