import profile_face1 from '../img/profile/face-1.JPG'

import PageNavigationLink from './PageNavigationLink'

const InternalMenu = () => 
{
    return (
        <div className='AsideColumnLayout-module'>
            <div className='AsideColumnLayout-module--slot-top'>
                <div className='Aside-module--profile'>
                    <img className='ProfileNavigation-module--profile' 
                        src={ profile_face1 } 
                        alt='profile' />
                    <div className='ProfileNavigation-module--name'>NIKOLAS KARINJA</div>
                </div>
            </div>
            <div className='AsideColumnLayout-module--slot-center'>
                <div className='Aside-module--pages'>
                    <PageNavigationLink path={ '/' } name={ 'PROJECTS' } />
                    <PageNavigationLink path={ '/' } name={ 'SERVICES' } />
                    <PageNavigationLink path={ '/' } name={ 'BLOG' } />
                    <PageNavigationLink path={ '/' } name={ 'BACKGROUND' } />
                    <PageNavigationLink path={ '/' } name={ 'CONTACT' } />
                </div>
            </div>
        </div>
    )
}

export default InternalMenu