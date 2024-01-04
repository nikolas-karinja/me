import img_homeName from '../../img/home-name.png'

import { setPageTitle } from '../../core/utils'
import PageLayoutNormal from '../PageLayoutNormal'
import InfoCards from '../InfoCards'
import { INFO_CARDS } from '../../core'

const Home = () =>
{
    setPageTitle('Welcome')

    return(
        <PageLayoutNormal
            titleArtImg={img_homeName}>
            <InfoCards 
                data={INFO_CARDS.Home} />
        </PageLayoutNormal>
    )
}

export default Home