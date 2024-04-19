import { IMainMenuItem } from './menu.interface'

export const MAIN_MENU: IMainMenuItem[] = [
    {
        name: 'Home',
        href: '/',
        icon: 'home'
    },
    {
        name: 'Мой словарь',
        href: '/collocation',
        icon: 'library-big'
    },
    {
        name: 'Добавить слово',
        href: '/collocation/add',
        icon: 'plus-square'
    },
]