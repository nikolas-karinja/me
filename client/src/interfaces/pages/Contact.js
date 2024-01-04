import { INFO_CARDS } from '../../core'
import { setPageTitle } from '../../core/utils'
import art_contactTitle from '../../img/contact-title.png'
import { Model as OldMobilePhoneModel } from '../../models/OldMobilePhone'
import CanvasSetup from '../CanvasSetup'
import InfoCards from '../InfoCards'
import PageLayoutNormal from '../PageLayoutNormal'
import ThreeModelPageWrapper from '../ThreeModelPageWrapper'

const Contact = () =>
{
    setPageTitle('Contact')

    return(
        <PageLayoutNormal
            titleArtImg={art_contactTitle}>
            <p>Here are the ways to get ahold of me.</p>
            <InfoCards
                data={INFO_CARDS.Contact} />
        </PageLayoutNormal>
    )
}

export default Contact