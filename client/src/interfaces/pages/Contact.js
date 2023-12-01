import { setPageTitle } from '../../core/utils'
import art_contactTitle from '../../img/contact-title.png'
import InternalMenu from '../InternalMenu'
import ExternalMenu from '../ExternalMenu'

const Contact = () =>
{
    setPageTitle('Contact')

    return(
        <>
            <div className='PageLayout-module--root'>
                <div className='PageLayout-module--page'>
                    <article>
                        <img className='PageLayout-module--page--title'
                            src={ art_contactTitle }
                            alt='Title' />
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

export default Contact