import icon_clickable from '../img/icons/clickable.svg'

import { ANIM_DELAY, SOUNDS } from '../core'
import CanvasSetup from './CanvasSetup'
import { useState } from 'react'

const InfoCard = ({title, primary, text, model, spin, index}) =>
{
    const [pointerEntered, setPointerEntered] = useState(false)

    const _onPointerEnter = () =>
    {
        SOUNDS.cardTouched.play()
        
        setPointerEntered(true)
    }

    const _onPointerLeave = () =>
    {
        setPointerEntered(false)
    }

    return(
        <div className='InfoCard-module'
            style={{animationDelay: index ? `-${ index * ANIM_DELAY.homeCards }s` : '0s'}}
            onPointerEnter={_onPointerEnter}
            onPointerLeave={_onPointerLeave}>
            <h3 className='text-left'>
                {`${pointerEntered ? "★ " : ""}`}{(title ? title : 'A Title').toUpperCase()}
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
                        model={model} />
                </div>
                <div>{ text ? text : 'Some text goes here. It will go here and only here' }</div>
            </div>
        </div>
    )
}

export default InfoCard