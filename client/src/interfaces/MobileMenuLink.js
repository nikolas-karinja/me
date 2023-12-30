import { Link } from 'react-router-dom'

const MobileMenuLink = ({onClick, path, name}) =>
{
    return <Link className='MobileMenu-module--menu--button'
        onClick={onClick}
        to={path}>
        {name.toUpperCase()}
    </Link>
}

export default MobileMenuLink