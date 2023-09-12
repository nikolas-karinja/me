import '../sass/Modules.sass'

const SocialsNavigationLink = ({ title, linkUrl, iconUrl }) => 
{
    return(
        <a className='SocialsNavigation-module--linkWrapper Clickable-module--root'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            href={ linkUrl }
            target='_blank'
            rel='noopener noreferrer me'
            title={ title }>
            <div className='SocialsNavigation-module--link'>
                <img className='Icon-module--icon32' src={ iconUrl } alt={ title } />
            </div>
        </a>
    )
}

export default SocialsNavigationLink