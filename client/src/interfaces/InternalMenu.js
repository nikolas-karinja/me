import profile_face1 from '../img/profile/face-1.JPG'
import profile_face2 from '../img/profile/face-2.jpg'

import PageNavigationLink from './PageNavigationLink'

const InternalMenu = () => 
{
    return (
        <div className='AsideColumnLayout-module'>
            <div className='AsideColumnLayout-module--slot-top'>
                <div className='Aside-module--profile'>
                    <img className='ProfileNavigation-module--profile' 
                        src={ profile_face2 } 
                        alt='profile' />
                    <div className='ProfileNavigation-module--name'>NIKOLAS KARINJA</div>
                </div>
            </div>
            <div className='AsideColumnLayout-module--slot-center'>
                <div className='Aside-module--pages'>
                    <PageNavigationLink path={ '/' } name={ 'Welcome' } />
                    <PageNavigationLink path={ '/projects' } name={ 'Projects' } />
                    <PageNavigationLink path={ '/blog' } name={ 'Blog' } />
                    <PageNavigationLink path={ '/background' } name={ 'Background' } />
                    <PageNavigationLink path={ '/contact' } name={ 'Contact' } />
                </div>
            </div>
        </div>
    )
}

export default InternalMenu