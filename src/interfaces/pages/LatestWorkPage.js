import img_latestWorkTitle from '../../img/latest_work-title.png'

import { setPageTitle } from '../../core/utils'
import PageLayoutNormal from '../PageLayoutNormal'
import LatestWorkTVSection from '../sections/LatestWorkTVSection'

const LatestWorkPage = () =>
{
    setPageTitle('Latest Work')

    return(
        <PageLayoutNormal constant
            titleArtImg={img_latestWorkTitle}>
            <LatestWorkTVSection />
        </PageLayoutNormal>
    )
}

export default LatestWorkPage