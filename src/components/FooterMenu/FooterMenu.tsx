import { authService } from '@/services/auth.service'
import { useRouter } from 'next/navigation'
import './footer-menu.scss'
import { Icon } from '@/components/ui/Icon/Icon'
import Link from 'next/link'

export function FooterMenu () {

    const { push } = useRouter()

    const logout = () => {
        authService.logout()
        push('/auth')
    }
    
    return (
        <div className='footer-menu'>
            <Link href='/user/setting' className='fm-link'>
                <Icon size={20} name='user-round' className='fm-link__icon' />
                <span className='fm-link__text'>User Name</span>
            </Link>
            <div className="fm-link" onClick={logout}>
                <Icon size={20} className='fm-link__icon' name='log-out' />
                <span className='fm-link__text'>Logout</span>
            </div>
        </div>
    )
}