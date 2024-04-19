import { MainMenu } from './menu/MainMenu'
import { useRouter } from 'next/navigation'
import { authService } from '@/services/auth.service'
import Link from 'next/link'

export function Sidebar (props: {customClass: string}) {
    const { push } = useRouter()

    const logout = () => {
        authService.logout()
        push('/auth')
    }
    return (
        <aside className={props.customClass}>
            <MainMenu />
            <Link href="/auth" className="main-menu-item">Login</Link>
            <button onClick={logout} >Logout</button>
        </aside>
    )
}