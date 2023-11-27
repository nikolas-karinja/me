import svg_project from '../img/icons/project.svg'
import svg_tool from '../img/icons/tool.svg'

import { TECHS } from '../core'

const ProjectsSectionRow = ({ flipped, cardData }) =>
{
    let _techs = cardData ? cardData.techs : ['js', 'sass']
    let _count = cardData ? cardData.images.length : 0

    return(
        <div className={ `Projects-section--row ${ flipped ? 'reversed' : '' }` }>
            <div className={ `Projects-section--card darken ${ flipped ? 'borderRadius--0100' : 'borderRadius--1000' }` }>
                <h3 className='Projects-section--card--title'>
                    { (cardData ? cardData.name : 'Project').toUpperCase() }
                </h3>
                <div className='divider'></div>
                <p className='Projects-section--card--info'>
                    { cardData ? cardData.info : 'Here is some info on the project that is being displayed.' }
                </p>
                <div className='Tech-module Projects-section--card--techs flex-reverse flex-right'>
                    { _techs.map((t) => (
                        <img 
                            src={ TECHS[ t ].icon }
                            alt='Tech'
                            key={ Math.random() } />
                    )) }
                </div>
            </div>
            <div className={ `Projects-section--card second ${ flipped ? 'reversed borderRadius--0001' : 'borderRadius--0010' }` }>
                <img className='Projects-section--card--galleryImg'
                    src={ cardData ? cardData.images[0] : svg_project }
                    alt='Gallery'
                    key={ Math.random() } />
                <img className={`Projects-section--card--img Icon-module--icon32 ${ flipped ? 'reversed' : '' }`}
                    src={!cardData ? svg_project : cardData.tool ? svg_tool : svg_project}
                    alt='Project' />
            </div>
        </div>
    )
}

export default ProjectsSectionRow