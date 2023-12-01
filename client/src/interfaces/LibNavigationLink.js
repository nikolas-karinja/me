const LibNavigationLink = ({name}) => 
{
    return(
        <a className='LibsNavigation-module--linkWrapper Clickable-module--root'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            href={`https://www.npmjs.com/package/${name}`}
            target='_blank'
            rel='noopener noreferrer me'
            title={ name }>{ name }</a>
    )
}

export default LibNavigationLink