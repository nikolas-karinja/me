import { setPageTitle } from '../../core/utils'
import art_projectsTitle from '../../img/projects-title.png'
import PackagesSection from '../sections/PackagesSection'
import ProjectsSection from '../sections/ProjectsSection'
import PageLayoutNormal from '../PageLayoutNormal'

const Projects = () =>
{
    setPageTitle('Projects')

    return(
        <PageLayoutNormal
            titleArtImg={art_projectsTitle}>
            <p>Below are all the things I am currently developing or working on. Some of these are passion projects while others are for practicality. My ongoing projects are fully-functioning apps usually ranging from web-based content to games. I focus primarily on developing apps that show my understanding and intricacies of the programming world. This is why you will see many demos and tools.</p>
            <ProjectsSection />
            <PackagesSection />
        </PageLayoutNormal>
    )
}

export default Projects