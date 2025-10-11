const MobileMenuSocialsLink = ({ title, linkUrl, iconUrl }) => 
{
    return(
        <a className='MobileMenu-module--socials--linkWrapper Clickable-module--root'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            href={linkUrl}
            target='_blank'
            rel='noopener noreferrer me'
            title={title}>
            <div className='MobileMenu-module--socials--link'>
                <img className='Icon-module--icon24' 
                src={iconUrl} 
                alt={title} />
            </div>
        </a>
    )
}

export default MobileMenuSocialsLink