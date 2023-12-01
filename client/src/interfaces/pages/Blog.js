import { useState } from 'react'
import art_blogTitle from '../../img/blog-title.png'
import BlogSearchBar from '../BlogSearchBar'
import { setPageTitle } from '../../core/utils'

const Blog = () =>
{
    const [searchTerm, setSearchTerm] = useState('')
    const [postsFound, setPostsFound] = useState([])

    const determineNotif = () =>
    {
        if (searchTerm.length > 0 && postsFound.length === 0)
        {
            return 'No articles or posts found.'
        }
        else if (searchTerm.length === 0 && postsFound.length === 0)
        {
            return 'No articles or posts exist yet.'
        }
        
        return ''
    }

    const onSearchInputChange = (e) =>
    {
        setSearchTerm(e.target.value)
    }

    setPageTitle('Blog')

    return(
        <div className='PageLayout-module--page constant'>
            <article>
                <img className='PageLayout-module--page--title'
                    src={art_blogTitle}
                    alt='Title' />
                <p>Peruse through articles and posts me and some associates have written. The subjects can range from our relative fields to genuine descriptions of events and emotions. Sometimes we even reveal thoughts on current concepts.</p>
                <BlogSearchBar onChange={onSearchInputChange}/>
                <div className='BlogCollection-module--wrapper'>
                    <p className='BlogCollection-module--wrapper--notif'
                        style={{display: postsFound.length > 0 ? 'none' : 'block'}}>
                        {determineNotif()}
                    </p>
                </div>
            </article>
        </div>
    )
}

export default Blog