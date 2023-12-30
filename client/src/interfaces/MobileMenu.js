import { useEffect, useState } from 'react'
import profile_face2 from '../img/profile/face-2.jpg'
import { addEventListener } from '../core/utils'
import { INFO } from '../core'

import icon_close from '../img/icons/close.svg'
import icon_menu from '../img/icons/menu.svg'
import PageNavigationLink from './PageNavigationLink'
import { Link } from 'react-router-dom'
import MobileMenuLink from './MobileMenuLink'

const MobileMenu = () =>
{
    const [pageTitle, setPageTitle] = useState('Hello')
    const [menuOpen, setMenuOpen] = useState(false)

    const onMenuButtonClick = () =>
    {
        setMenuOpen(false)
    }

    const toggleMenu = () =>
    {
        setMenuOpen(!menuOpen)
    }
    
    useEffect(() => 
    {
        setPageTitle(INFO.pageTitle)
    }, [INFO.pageTitle])

    return (
        <div className='MobileMenu-module--wrapper'>
            <div className='MobileMenu-module--pageTitle'
                id='mobile-page-title'>
                {pageTitle.toUpperCase()}
            </div>
            <img className='MobileMenu-module--menuButton' 
                style={{display: menuOpen ? 'none' : 'inline-block'}}
                src={icon_menu}
                alt='Menu Button'
                onClick={toggleMenu} />
            <img className='MobileMenu-module--menuButton' 
                style={{display: menuOpen ? 'inline-block' : 'none'}}
                src={icon_close}
                alt='Menu Button'
                onClick={toggleMenu} />
            <div className='MobileMenu-module--menu'
                style={{display: menuOpen ? 'inline-block' : 'none'}}>
                
                <MobileMenuLink 
                    onClick={onMenuButtonClick}
                    path={'/'} 
                    name={'Welcome'} />
                <MobileMenuLink 
                    onClick={onMenuButtonClick}
                    path={'/projects'} 
                    name={'Projects'} />
                <MobileMenuLink 
                    onClick={onMenuButtonClick}
                    path={'/blog'} 
                    name={'Blog'} />
                <MobileMenuLink 
                    onClick={onMenuButtonClick}
                    path={'/background'} 
                    name={'Background'} />
                <MobileMenuLink 
                    onClick={onMenuButtonClick}
                    path={'/contact'} 
                    name={'Contact'} />
            </div>
        </div>
    )
}

export default MobileMenu