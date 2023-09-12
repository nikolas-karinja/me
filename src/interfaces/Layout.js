import { Outlet } from 'react-router-dom'
import '../sass/Modules.sass'

import ExternalMenu from './ExternalMenu'
import InternalMenu from './InternalMenu'

const Layout = () => 
{
    return (
        <>
            <div className='PageLayout-module--root'>
                <Outlet />
            </div>
            <div className='PageLayout-module--horizontal'>
                <InternalMenu />
                <ExternalMenu />
            </div>
        </>
    )
}

export default Layout