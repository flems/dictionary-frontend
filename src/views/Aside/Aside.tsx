import { MainMenu } from '../MainMenu/MainMenu'
import { FooterMenu } from '@/components/FooterMenu/FooterMenu'
import './aside.scss'
import { Logo } from '@/components/Logo/Logo'


export function Aside (props: {customClass: string}) {
    return (
        <aside className={`aside ${props.customClass}`}>
            <header className="aside__header">
                <Logo />
            </header>
            <div className='aside__container'>
                <MainMenu />

            </div>
            <footer className="aside__footer">
                <FooterMenu />
            </footer>
        </aside>
    )
}