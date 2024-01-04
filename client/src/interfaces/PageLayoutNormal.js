import ExternalMenu from './ExternalMenu'
import InternalMenu from './InternalMenu'

const PageLayoutNormal = ({titleArtImg, children}) =>
{
    return (
        <>
            <div className='PageLayout-module--root'>
                <div className='PageLayout-module--page'>
                    <article>
                        <img className='PageLayout-module--page--title'
                            src={titleArtImg}
                            alt='Title' />
                        <div className='ThreeModel-module page'>
                            {children}    
                        </div>
                    </article>
                </div>
            </div>
            <div className='PageLayout-module--horizontal'>
                <InternalMenu />
                <ExternalMenu />
            </div>
        </>
    )
}

export default PageLayoutNormal