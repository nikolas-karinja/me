import img_homeName from '../../img/home-name.png'

import { setPageTitle } from '../../core/utils'
import PageLayoutNormal from '../PageLayoutNormal'
import InfoCards from '../InfoCards'
import { INFO_CARDS } from '../../core'
import SiteBuilderAdvertisementSection from '../sections/SiteBuilderAdvertisementSection'

const HomePage = () =>
{
    setPageTitle('Welcome')

    return(
        <PageLayoutNormal
            titleArtImg={img_homeName}>
            <SiteBuilderAdvertisementSection />
            <InfoCards 
                className='home'
                data={INFO_CARDS.Home} />
        </PageLayoutNormal>
    )
}

export default HomePage