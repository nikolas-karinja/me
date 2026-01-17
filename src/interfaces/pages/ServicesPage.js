import { setPageTitle } from '../../core/utils'
import art_servicesTitle from '../../img/services-title.png'
import PackagesSection from '../sections/PackagesSection'
import ProjectsSection from '../sections/ProjectsSection'
import PageLayoutNormal from '../PageLayoutNormal'

const ServicesPage = () =>
{
    setPageTitle('Services')

    return(
        <PageLayoutNormal
            titleArtImg={art_servicesTitle}>
        </PageLayoutNormal>
    )
}

export default ServicesPage