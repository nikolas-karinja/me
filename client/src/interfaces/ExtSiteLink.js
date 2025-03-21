const ExtSiteLink = ({title, linkUrl, children}) => 
{
    return(
        <a href={linkUrl}
            target='_blank'
            rel='noopener noreferrer me'
            title={title}>
            {children}
        </a>
    )
}

export default ExtSiteLink