export enum ECaptionSize {
    xl = 'xl', // h1
    l = 'l', // h2
    m = 'm' // h3
}

export type ICaption = {
    children: React.ReactNode,
    size: ECaptionSize
}