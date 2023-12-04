import art_eyesWithoutAForm from '../img/art/eyes-without-a-form.svg'

import { Outlet } from 'react-router-dom'

import ExternalMenu from './ExternalMenu'
import InternalMenu from './InternalMenu'
import { useEffect, useState } from 'react'
import { addEventListener } from '../core/utils'

const Layout = () => 
{
    return (
        <>
            <img className='Art-module'
                src={ art_eyesWithoutAForm } 
                alt='Background' />
            <Outlet />
        </>
    )
}

export default Layout