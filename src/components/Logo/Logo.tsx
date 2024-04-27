import './logo.scss'
import { Icon } from '@/components/ui/Icon/Icon'

export function Logo () {
    return (
        <a href="/" className='logo'>
            <Icon className='logo__icon' name={'chrome'} size={30} />
            <span className='logo__text'>LangBlaBla</span>
        </a>
    )
}