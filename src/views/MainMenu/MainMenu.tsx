import { MenuItem } from './components/MenuItem/MenuItem'
import { MAIN_MENU } from './menu.data'
import { IMenuItem } from './menu.interface'
import './main-menu.scss'

export function MainMenu () {
    return <nav className='main-menu'>
        <ul className='main-menu__list'>
            {MAIN_MENU.map((item: IMenuItem, index: number) => (
                <li key={index}>
                    <MenuItem data={item} />
                </li>
            ))}
        </ul>
    </nav>
}