import art_projectsTitle from '../../img/projects-title.png'
import PackagesSection from '../sections/PackagesSection'
import ProjectsSection from '../sections/ProjectsSection'

const Projects = () =>
{
    return(
        <div className='PageLayout-module--page'>
            <article>
                <img className='PageLayout-module--page--title'
                    src={art_projectsTitle}
                    alt='Title' />
                <p>Below are all the things I am currently developing or working on. Some of these are passion projects while others are for practicality. My ongoing projects are fully-functioning apps usually ranging from web-based content to games.</p>
                <ProjectsSection />
                <PackagesSection />
            </article>
        </div>
    )
}

export default Projects