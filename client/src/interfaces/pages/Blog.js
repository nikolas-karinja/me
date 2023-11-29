import art_projectsTitle from '../../img/projects-title.png'

const Blog = () =>
{
    return(
        <div className='PageLayout-module--page'>
            <article>
                <img className='PageLayout-module--page--title'
                    src={art_projectsTitle}
                    alt='Title' />
                <p>Below are some articles and posts me and friends have made for others to view and take in.</p>
            </article>
        </div>
    )
}

export default Blog