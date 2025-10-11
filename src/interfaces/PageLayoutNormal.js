import { useState } from 'react'
import { SOUNDS } from '../core'
import ExternalMenu from './ExternalMenu'
import InternalMenu from './InternalMenu'

const PageLayoutNormal = ({titleArtImg, children}) =>
{
    let _titleSound = null

    const _onPointerEnterTitle = () =>
    {
        _titleSound = SOUNDS.angelicTitle.play()
    }

    const _onPointerLeaveTitle = () =>
    {
        SOUNDS.angelicTitle.stop(_titleSound)
    }

    return (
        <>
            <div className='PageLayout-module--root'>
                <div className='PageLayout-module--page'>
                    <article>
                        <img className='PageLayout-module--page--title'
                            src={titleArtImg}
                            alt='Title'
                            onPointerEnter={_onPointerEnterTitle}
                            onPointerLeave={_onPointerLeaveTitle} />
                        {children}
                    </article>
                </div>
            </div>
            <div className='PageLayout-module--horizontal'>
                <InternalMenu />
                <ExternalMenu />
            </div>
        </>
    )
}

export default PageLayoutNormal