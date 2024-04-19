import { Caption } from '@/components/ui/Caption/Caption'
import { ECaptionSize } from '@/components/ui/Caption/caption.interface'
import { AddForm } from '@/views/AddForm/AddForm'

export default function Add() {
    return <div>
        <Caption size={ECaptionSize.xl}>
            New Card
        </Caption>
        <AddForm />
    </div>
}