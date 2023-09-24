import ProjectsSectionRow from '../ProjectSectionRow'

const ProjectsSection = () =>
{
    return(
        <div className='PageSection-module--root'>
            <ProjectsSectionRow />
            <ProjectsSectionRow flipped />
        </div>
    )
}

export default ProjectsSection