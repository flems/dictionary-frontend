import type { ICaption } from './caption.interface'

import './caption.scss'

export function Caption ({
    children,
    size
}: ICaption) {
    return <div className={`caption caption--size-${size}`}>
        {children}
    </div>
}