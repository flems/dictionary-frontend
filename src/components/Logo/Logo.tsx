import './logo.scss'
import { Icon } from '@/components/ui/Icon/Icon'

export function Logo ({
    theme = 'light',
    size = 'm',
    className = ''
}: {
    theme?: 'light' | 'dark',
    size?: 'm' | 'l',
    className?: string
}) {
    const addClass = [
        `logo--theme-${theme}`,
        `logo--size-${size}`,
        className
    ]

    return (
        <a href="/" className={`logo ${addClass.join(' ')}`}>
            <Icon className='logo__icon' name={'chrome'} />
            <span className='logo__text'>LangBlaBla</span>
        </a>
    )
}