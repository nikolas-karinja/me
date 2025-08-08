import art_eyesWithoutAForm from '../img/art/eyes-without-a-form.svg'

import { Outlet } from 'react-router-dom'

import ExternalMenu from './ExternalMenu'
import InternalMenu from './InternalMenu'
import { useEffect, useState } from 'react'
import { addEventListener } from '../core/utils'
import MobileMenu from './MobileMenu'
import SiteEntry from './SiteEntry'

const Layout = () => 
{
    return (
        <>
            <img className='Art-module'
                src={ art_eyesWithoutAForm } 
                alt='Background' />
            <Outlet />
            <MobileMenu />
            <SiteEntry />
        </>
    )
}

export default Layout