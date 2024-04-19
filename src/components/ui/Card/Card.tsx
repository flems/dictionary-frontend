import { ICollocationResponse } from '@/types/collocations.types'
import './card.scss'
import { collocationService } from '@/services/collocation.service'

export function Card ({ item }: {item: ICollocationResponse}) {
    
    return (
        <div className={`card`}>
            {/* <small>id: {item.id}</small> */}
            
            <p className="card__title">{item.name}</p>
            <div className="card__details">
                <div className="card__block">
                    <p className="card__subtitle">Defenition</p>
                    <p className="card__text">{item.defenition}</p>
                </div>

                { item.example &&
                    <div className="card__block">
                        <p className="card__subtitle">Example</p>
                        <p className="card__text">{item.example}</p>
                    </div>
                }

                { item.translation &&
                    <div className="card__block">
                        <p className="card__subtitle">Translation</p>
                        <p className="card__text">{item.translation}</p>
                    </div>
                }
            </div>
            <button onClick={() => { collocationService.deleteCollocation(item.id)}}>Delete</button>
        </div>
    )
}