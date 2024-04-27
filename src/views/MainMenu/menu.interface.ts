import { IconName } from '@/components/ui/Icon/Icon'

export interface IMenuItem {
    href: string,
    name: string,
    icon: IconName,
    disabled?: boolean
}

export type IMenuList = IMenuItem[]