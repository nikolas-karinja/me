import { setPageTitle } from '../../core/utils'
import art_contactTitle from '../../img/contact-title.png'

const Contact = () =>
{
    setPageTitle('Contact')

    return(
        <div className='PageLayout-module--page'>
            <article>
                <img className='PageLayout-module--page--title'
                    src={ art_contactTitle }
                    alt='Title' />
                
            </article>
        </div>
    )
}

export default Contact