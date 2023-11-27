import art_eyesWithoutAForm from '../img/art/eyes-without-a-form.svg'

import { Outlet } from 'react-router-dom'

import ExternalMenu from './ExternalMenu'
import InternalMenu from './InternalMenu'

const Layout = () => 
{
    return (
        <>
            <img className='Art-module'
                src={ art_eyesWithoutAForm } 
                alt='Background' />
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