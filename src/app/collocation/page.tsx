'use client'

import './page.scss'
import { useCollocations } from './useCollocations'
import { CollocationCard } from '@/components/CollocationCard/CollocationCard'
import { Hero } from '@/views/Hero/Hero'


export default function Home() {
  const data = useCollocations()


  return (
    <div className='collocation-page'>
      <Hero title='Collocation' />
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
