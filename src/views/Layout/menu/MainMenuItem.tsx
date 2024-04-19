import { Icon } from '@/components/ui/Icon/Icon'
import Link from 'next/link'
import './mainMenuItem.scss'
import { IMainMenuItem } from './menu.interface'

export function MainMenuItem ({ data }: { data: IMainMenuItem }) {
    return (
        <Link href={data.href} className="main-menu-item">
            <Icon  name={data.icon} />
            <span>{data.name}</span>
        </Link>
    )
}