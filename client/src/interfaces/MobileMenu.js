import icon_github from '../img/icons/github.svg'
import icon_instagram from '../img/icons/instagram.svg'
import icon_linkedin from '../img/icons/linkedin.svg'
import icon_npm from '../img/icons/npm.svg'
import icon_close from '../img/icons/close.svg'
import icon_menu from '../img/icons/menu.svg'

import { LINKS } from '../core'
import { useEffect, useState } from 'react'
import { INFO } from '../core'
import MobileMenuLink from './MobileMenuLink'
import MobileMenuSocialsLink from './MobileMenuSocialsLink'

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
            <div className='MobileMenu-module--socials'>
                <MobileMenuSocialsLink title='Github' linkUrl={ LINKS.GITHUB } iconUrl={ icon_github } />
                <MobileMenuSocialsLink title='NPM' linkUrl={ LINKS.NPMJS } iconUrl={ icon_npm } />
                <MobileMenuSocialsLink title='LinkedIn' linkUrl={ LINKS.LINKEDIN } iconUrl={ icon_linkedin } />
                <MobileMenuSocialsLink title='Instagram' linkUrl={ LINKS.INSTAGRAM } iconUrl={ icon_instagram } />
            </div>
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
                    path={'/products'} 
                    name={'Products'} />
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