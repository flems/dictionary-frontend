'use client'

import { Caption } from '@/components/ui/Caption/Caption'
import { ECaptionSize } from '@/components/ui/Caption/caption.interface'
// import { Card } from '@/components/ui/Card/Card'
// import { data } from '@/components/ui/Card/card.example-data'
import './page.scss'
import { useCollocations } from './useCollocations'
import { CollocationCard } from '@/components/CollocationCard/CollocationCard'


export default function Home() {
  const data = useCollocations()


  return (
    <div className='collocation-page'>
      <div className="collocation-page__list">
        {data.map((item, index) => (
          <CollocationCard
            item={item}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
