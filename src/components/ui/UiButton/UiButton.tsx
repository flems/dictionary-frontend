import { IUiButton, EButtonTheme } from './ui-button.interface'
import './ui-button.scss'

export function UiButton ({
    theme = EButtonTheme.dark,
    children,
    className,
    type,
    ...props
}: IUiButton) {
    const addClass = `${className || ''} ui-button--theme-${theme}`

    return (
        <button className={`ui-button ${addClass}`} {...props} >
            {children}
        </button>
    )
}