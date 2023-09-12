import '../sass/Modules.sass'

import icon_github from '../img/icons/github.svg'
import icon_instagram from '../img/icons/instagram.svg'
import icon_linkedin from '../img/icons/linkedin.svg'
import icon_npm from '../img/icons/npm.svg'

import { LINKS } from '../core'
import SocialsNavigationLink from './SocialsNavigationLink'
import LibNavigationLink from './LibNavigationLink'

const ExternalMenu = () => 
{
    return (
        <div className='AsideColumnLayout-module right'>
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
                    <LibNavigationLink name='react' linkUrl={ LINKS.INSTAGRAM } />
                    <LibNavigationLink name='react-router-dom' linkUrl={ LINKS.INSTAGRAM } />
                    <LibNavigationLink name='@react-three/fiber' linkUrl={ LINKS.INSTAGRAM } />
                    <LibNavigationLink name='@react-three/drei' linkUrl={ LINKS.INSTAGRAM } />
                    <LibNavigationLink name='framer-motion' linkUrl={ LINKS.INSTAGRAM } />
                    <LibNavigationLink name='sass' linkUrl={ LINKS.INSTAGRAM } />
                </div>
            </div>
        </div>
    )
}

export default ExternalMenu