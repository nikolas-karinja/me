import { Link } from 'react-router-dom'
import { SOUNDS } from '../core'

const MobileMenuLink = ({onClick, path, name}) =>
{
    const _onPointerUp = () =>
    {
        SOUNDS.siteMenuClick.play()
    }

    return <Link className='MobileMenu-module--menu--button'
        onPointerUp={_onPointerUp}
        onClick={onClick}
        to={path}>
        {name.toUpperCase()}
    </Link>
}

export default MobileMenuLink