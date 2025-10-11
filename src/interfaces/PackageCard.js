import { ANIM_DELAY, TECHS } from '../core'
import svg_npm from '../img/icons/tech/npm.svg'

const PackageCard = ({ cardData, odd, index }) =>
{
    return(
        <a className={ `Packages-section--card ${ odd ? 'darken' : '' }` }
            style={{animationDelay: index ? `${ index * ANIM_DELAY.homeCards }s` : '0s'}}
            href={ `https://www.npmjs.com/package/${ cardData ? cardData.name : 'react'}` }
            target='_blank'
            rel='noopener noreferrer me'>
            <img className='Packages-section--card--img'
                src={ svg_npm } 
                alt='NPM'/>
            <div className='Packages-section--card--techs Tech-module'>
                {cardData ? cardData.techs.map((t) => 
                (
                    <img
                        src={ TECHS[t].icon }
                        alt='Tech'
                        key={ Math.random() } />
                )) : <></>}
            </div>
            <h4>
                { cardData ? cardData.name : 'package' }
            </h4>
            <p className='Packages-section--card--info'>
                { cardData ? cardData.info : `Here is some info on the package. It's meant to give you an idea of its functionality` }
            </p>
        </a>
    )
}

export default PackageCard