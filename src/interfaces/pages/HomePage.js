import img_homeName from '../../img/home-name.png'

import { setPageTitle } from '../../core/utils'
import PageLayoutNormal from '../PageLayoutNormal'
import InfoCards from '../InfoCards'
import { INFO_CARDS } from '../../core'
import SiteBuilderAdvertisementSection from '../sections/SiteBuilderAdvertisementSection'
import ServiceCard from '../ServiceCard'
import { Model as LanguageStack } from "../../models/LanguageStack"

const HomePage = () =>
{
    setPageTitle('Welcome')

    return(
        <PageLayoutNormal
            titleArtImg={img_homeName}>
            <SiteBuilderAdvertisementSection />
            <ServiceCard title={"LEARN CODING + AI"}
            centerButtons
            titleAnimClass={"threedWebApp"}
            initTitleBounceDelay={1}
            avoidShowcase={true}
            model={<LanguageStack 
                position={[0, 0, 0]}
                scale={1} />}
            content={<>
                <h3 className="title">★ Lessons on Coding & AI</h3>
                <h2>FOR KIDS & ADULTS!</h2>
                <p>Want to understand coding and learn multiple languages? Want to harness the power of AI and understand its use for your own personal goals? I'm the best teacher out there. I offer weekly to one-off lessons that align with your schedule! <b>Book a consultation</b> with me so we can figure out what's best for you.</p>
            </>} />
            <InfoCards 
                className='home'
                data={INFO_CARDS.Home} />
        </PageLayoutNormal>
    )
}

export default HomePage