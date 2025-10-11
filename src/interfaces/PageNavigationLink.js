import { SOUNDS } from '../core'
import { setPageTitle } from '../core/utils'
import svg_pointerRight from '../img/icons/pointer-right.svg'

import { Link } from 'react-router-dom'

const PageNavigationLink = ({path, name}) => 
{
    const _onMouseUp = () =>
    {
        SOUNDS.siteMenuClick.play()
    }

    return(
        <Link className='PageNavigation-module--linkWrapper Clickable-module--root' 
            to={ path }
            onMouseUp={_onMouseUp}>
            {name.toUpperCase()}
            <img
                src={svg_pointerRight}
                alt='Pointer' />
        </Link>
    )
}

export default PageNavigationLink