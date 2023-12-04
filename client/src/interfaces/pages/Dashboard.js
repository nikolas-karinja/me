import { useEffect } from 'react'
import art_projectsTitle from '../../img/projects-title.png'
import { INFO } from '../../core'
import { dispatchEvent } from '../../core/utils'

const Dashboard = () =>
{
    useEffect(() => 
    {
        INFO.displaySideMenus = false

        
    }, [])

    dispatchEvent('show-dashboard')

    return(
        <div className='PageLayout-module--page'>
            <article>
                <img className='PageLayout-module--page--title'
                    src={art_projectsTitle}
                    alt='Title' />
                
            </article>
        </div>
    )
}

export default Dashboard