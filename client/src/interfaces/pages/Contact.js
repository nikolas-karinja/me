import { INFO_CARDS } from '../../core'
import { setPageTitle } from '../../core/utils'
import art_contactTitle from '../../img/contact-title.png'
import InfoCards from '../InfoCards'
import PageLayoutNormal from '../PageLayoutNormal'

const Contact = () =>
{
    setPageTitle('Contact')

    return(
        <PageLayoutNormal
            titleArtImg={art_contactTitle}>
            <p>Here are the ways to get ahold of me. If you have access to this website, you will definitely be able to reach out to me.</p>
            <InfoCards
                className='contact'
                data={INFO_CARDS.Contact} />
        </PageLayoutNormal>
    )
}

export default Contact