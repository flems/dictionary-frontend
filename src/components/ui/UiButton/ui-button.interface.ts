import React from 'react'

export enum EButtonTheme {
    dark = 'dark',
    light = 'light',
    bordered = 'bordered'
}

export type IUiButton = React.HTMLProps<HTMLButtonElement> & {
    theme?: EButtonTheme,
    children: React.ReactNode,
    className?: string,
    type?: string
}