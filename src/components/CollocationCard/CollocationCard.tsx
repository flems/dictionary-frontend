import { Icon } from '@/components/ui/Icon/Icon'
import { ICollocationResponse } from '@/types/collocations.types'
import './collocation-card.scss'
import { collocationService } from '@/services/collocation.service'

export function CollocationCard ({ item }: {item: ICollocationResponse}) {
    
    return (
        <div className={`collocation-card`}>
            <div className="collocation-card__front">
                {/* to do sanitize html and render as html to render html symbols */}
                <p className="collocation-card__title">{item.name}</p>
                {/* <p
                    className="collocation-card__title"
                    dangerouslySetInnerHTML={{ __html: item.name }}
                /> */}
            </div>
            <div className="collocation-card__back">
                
                <div className="collocation-card__tools">
                    <button className='collocation-card__tool-btn collocation-card__tool-btn--edit'>
                        <Icon  name={'pencil-line'} strokeWidth={2} />
                    </button>
                    <button className='collocation-card__tool-btn collocation-card__tool-btn--delete' onClick={() => { collocationService.deleteCollocation(item.id)}}>
                        <Icon  name={'trash-2'} strokeWidth={2} />
                    </button>
                </div>

                <div className="collocation-card__details">
                    <div className="collocation-card__block">
                        <p className="collocation-card__subtitle">Defenition</p>
                        <p className="collocation-card__text">{item.defenition}</p>
                    </div>

                    { item.example &&
                        <div className="collocation-card__block">
                            <p className="collocation-card__subtitle">Example</p>
                            <p className="collocation-card__text">{item.example}</p>
                        </div>
                    }

                    { item.translation &&
                        <div className="collocation-card__block">
                            <p className="collocation-card__subtitle">Translation</p>
                            <p className="collocation-card__text">{item.translation}</p>
                        </div>
                    }
                </div>
            </div>
            
        </div>
    )
}