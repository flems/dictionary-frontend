'use client'

import { Caption } from '@/components/ui/Caption/Caption'
import { ECaptionSize } from '@/components/ui/Caption/caption.interface'
// import { Card } from '@/components/ui/Card/Card'
// import { data } from '@/components/ui/Card/card.example-data'
import './home.scss'
import { useCollocations } from './useCollocations'
import { CollocationCard } from '@/components/CollocationCard/CollocationCard'


export default function Home() {
  const data = useCollocations()


  return (
    <div className='home'>
      <Caption size={ECaptionSize.xl}>
        Мой словарь
      </Caption>
      <div className="home__content">
        {data.map((item, index) => (
          <CollocationCard item={item} key={index} />
        ))}
      </div>
    </div>
  )
}
