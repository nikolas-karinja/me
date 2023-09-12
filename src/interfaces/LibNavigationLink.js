import '../sass/Modules.sass'

const LibNavigationLink = ({ name, linkUrl }) => 
{
    return(
        <a className='LibsNavigation-module--linkWrapper Clickable-module--root'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            href={ linkUrl }
            target='_blank'
            rel='noopener noreferrer me'
            title={ name }>{ name }</a>
    )
}

export default LibNavigationLink