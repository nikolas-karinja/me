import { useState } from 'react'
import art_blogTitle from '../../img/blog-title.png'
import BlogSearchBar from '../BlogSearchBar'
import { setPageTitle } from '../../core/utils'
import PageLayoutNormal from '../PageLayoutNormal'

const BlogPage = () =>
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
        <PageLayoutNormal
            titleArtImg={art_blogTitle}>
            <p>Peruse through articles and posts me and some associates have written. The subjects can range from our relative fields to genuine descriptions of events and emotions. Sometimes we even reveal thoughts on current concepts.</p>
            <BlogSearchBar onChange={onSearchInputChange}/>
            <div className='BlogCollection-module--wrapper'>
                <p className='BlogCollection-module--wrapper--notif'
                    style={{display: postsFound.length > 0 ? 'none' : 'block'}}>
                    {determineNotif()}
                </p>
            </div>
        </PageLayoutNormal>
    )
}

export default BlogPage