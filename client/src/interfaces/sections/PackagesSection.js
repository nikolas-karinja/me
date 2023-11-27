import { PACKAGES } from '../../core'
import PackageCard from '../PackageCard'
import SectionTitle from '../SectionTitle'

const PackagesSection = () =>
{
    let _count = 0

    return(
        <div className='PageSection-module--root'>
            <SectionTitle
                value='Maintained Packages'
                className='text-right' />
            <div className='Packages-section--container'>
                { Object.keys(PACKAGES).map((p) => 
                {
                    _count++

                    return <PackageCard 
                        cardData={ PACKAGES[ p ] }
                        odd={ _count % 2 !== 0 }
                        index={ _count }
                        key={ Math.random() } />
                }) }
            </div>
        </div>
    )
}

export default PackagesSection