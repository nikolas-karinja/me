import icon_github from '../img/icons/github.svg'
import icon_instagram from '../img/icons/instagram.svg'
import icon_linkedin from '../img/icons/linkedin.svg'
import icon_npm from '../img/icons/npm.svg'

import photo_suit1 from '../img/photos/suit-1.png'

import { LINKS } from '../core'
import SocialsNavigationLink from './SocialsNavigationLink'
import LibNavigationLink from './LibNavigationLink'

const ExternalMenu = () => 
{
    return (
        <div className='AsideColumnLayout-module right'>
            <img className='Aside-module--socials--img'
                src={photo_suit1}
                alt='Suit' />
            <div className='AsideColumnLayout-module--slot-center'>
                <div className='Aside-module--socials'>
                    <SocialsNavigationLink title='Github' linkUrl={ LINKS.GITHUB } iconUrl={ icon_github } />
                    <SocialsNavigationLink title='NPM' linkUrl={ LINKS.NPMJS } iconUrl={ icon_npm } />
                    <SocialsNavigationLink title='LinkedIn' linkUrl={ LINKS.LINKEDIN } iconUrl={ icon_linkedin } />
                    <SocialsNavigationLink title='Instagram' linkUrl={ LINKS.INSTAGRAM } iconUrl={ icon_instagram } />
                </div>
            </div>
            <div className='AsideColumnLayout-module--slot-bottom'>
                <div className='Aside-module--libs'>
                    <LibNavigationLink name='react' />
                    <LibNavigationLink name='react-router-dom' />
                    <LibNavigationLink name='@react-three/fiber' />
                    <LibNavigationLink name='@react-three/drei' />
                    <LibNavigationLink name="@emailjs/browser" />
                    <LibNavigationLink name='framer-motion' />
                    <LibNavigationLink name='sass' />
                </div>
            </div>
        </div>
    )
}

export default ExternalMenu