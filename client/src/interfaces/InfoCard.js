import icon_clickable from '../img/icons/clickable.svg'

import { ANIM_DELAY } from '../core'
import CanvasSetup from './CanvasSetup'

const InfoCard = ({ title, primary, text, model, spin, index }) =>
{
    return(
        <div className='InfoCard-module'
            style={{animationDelay: index ? `-${ index * ANIM_DELAY.homeCards }s` : '0s'}}>
            <h3 className='text-left'>
                {(title ? title : 'A Title').toUpperCase()}
            </h3>
            {primary ? <div className='InfoCard-module--primary'>
                    {primary}
                </div> : <img className='InfoCard-module--icon' 
                    src={ icon_clickable }
                    alt='Clickable' />}
            <div className='divider' />
            <div className='InfoCard-module--content'>
                <div className='InfoCard-module--canvas'>
                    <CanvasSetup 
                        spin={spin}
                        model={model} />
                </div>
                <div>{ text ? text : 'Some text goes here. It will go here and only here' }</div>
            </div>
        </div>
    )
}

export default InfoCard