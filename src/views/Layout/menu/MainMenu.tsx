import { MainMenuItem } from './MainMenuItem'
import { MAIN_MENU } from './menu.data'

export function MainMenu () {
    return <nav>
        {MAIN_MENU.map(item => (
            <MainMenuItem
                key={item.href}
                data={item}
            />
        ))}
    </nav>
}