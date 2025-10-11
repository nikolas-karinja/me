import { PROJECTS } from '../../core'
import ProjectsSectionRow from '../ProjectSectionRow'
import SectionTitle from '../SectionTitle'

const ProjectsSection = () =>
{
    let _count = 0

    return(
        <div className='PageSection-module--root'>
            <SectionTitle
                value='Ongoing Projects'
                className='text-left' />
            { Object.keys(PROJECTS).map((p) => 
            {
                _count++

                return <ProjectsSectionRow 
                    cardData={ PROJECTS[ p ] }
                    flipped={ _count % 2 === 0 }
                    key={ Math.random() } />
            }) }
        </div>
    )
}

export default ProjectsSection