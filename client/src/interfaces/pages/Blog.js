import art_blogTitle from '../../img/blog-title.png'
import BlogSearchBar from '../BlogSearchBar'

const Blog = () =>
{
    return(
        <div className='PageLayout-module--page'>
            <article>
                <img className='PageLayout-module--page--title'
                    src={art_blogTitle}
                    alt='Title' />
                <p>Peruse through articles and posts me and some associates have written. The subjects can range from our relative fields to genuine descriptions of events and emotions. Sometimes we even reveal thoughts on current concepts.</p>
                <BlogSearchBar />
            </article>
        </div>
    )
}

export default Blog