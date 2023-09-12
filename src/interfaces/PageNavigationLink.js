import { Link } from 'react-router-dom'
import '../sass/Modules.sass'

const PageNavigationLink = ({ path, name }) => 
{
    return(
        <Link className='PageNavigation-module--linkWrapper Clickable-module--root' to={ path }>{ name }</Link>
    )
}

export default PageNavigationLink