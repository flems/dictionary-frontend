import { IMenuList } from './menu.interface'

export const MAIN_MENU: IMenuList = [
    {
        name: 'Add new card',
        href: '/collocation/add',
        icon: 'plus-square',
    },
    {
        name: 'Collocations',
        href: '/collocation',
        icon: 'library-big',
    },
    {
        name: 'Categories',
        href: '/category',
        icon: 'folders',
    },
    {
        name: 'Training',
        href: '/training',
        icon: 'dumbbell',
    },
    {
        name: 'Analytics',
        href: '/analytics',
        icon: 'line-chart',
    }
]