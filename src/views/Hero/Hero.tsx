import { Caption } from '@/components/ui/Caption/Caption'
import './hero.scss'
import { ECaptionSize } from '@/components/ui/Caption/caption.interface'

export function Hero (props: {title: string}) {
    return(
        <div className='hero'>
            <Caption size={ECaptionSize.xl}>
                { props.title }
            </Caption>
        </div>
    )
}