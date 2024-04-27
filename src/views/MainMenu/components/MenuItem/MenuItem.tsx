'use client'

import { Icon } from '@/components/ui/Icon/Icon'
import Link from 'next/link'
import './menu-item.scss'
import { usePathname } from 'next/navigation'
import { IMenuItem } from '../../menu.interface'

export function MenuItem ({ data }: { data: IMenuItem }) {
    const currentPath = usePathname()
    const addClass = currentPath == data.href ? 'is-active' : ''

    return (
        <Link href={data.href} className={`menu-item ${addClass}`}>
            <Icon size={24} className='menu-item__icon' name={data.icon} />
            <span className='menu-item__text'>{data.name}</span>
        </Link>
    )
}