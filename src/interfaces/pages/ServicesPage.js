import { setPageTitle } from '../../core/utils'
import art_servicesTitle from '../../img/services-title.png'
import PageLayoutNormal from '../PageLayoutNormal'
import ServiceCardsSection from '../sections/ServiceCardsSection'

const ServicesPage = () =>
{
    setPageTitle('Services')

    return(
        <PageLayoutNormal
            titleArtImg={art_servicesTitle}>
            <ServiceCardsSection />
        </PageLayoutNormal>
    )
}

export default ServicesPage