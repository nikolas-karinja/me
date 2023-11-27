import '../../sass/Home.sass'

import img_homeName from '../../img/home-name.png'

import HomeCred from '../HomeCred'
import { Model as IBMPC5150Model } from '../../models/IBMPC5150'
import { Model as LanuageStackModel } from '../../models/LanguageStack'
import { Model as PencilModel } from '../../models/Pencil'
import ProjectsSection from '../sections/ProjectsSection'
import PackagesSection from '../sections/PackagesSection'

const Home = () =>
{
    return(
        <div className='PageLayout-module--page'>
            <article>
                <img className='Home--name' 
                    src={ img_homeName } 
                    alt='Nikolas Aleksandr Karinja' />
                <div className='Home--credentials'>
                    <HomeCred 
                        index={ 1 }
                        title='7+ years' 
                        text={ `Of programming and software design. I've been doing this for own fun since I was 12 playing around with the MS-DOS 6.0 kernel in my school's library.` }
                        model={ <IBMPC5150Model 
                            scale={1.5} /> } />
                    <HomeCred 
                        index={ 2 }
                        title='Multilingual'
                        text={ `In many programming languages. Ranging from my beloved JavaScript to C++, the vast space between allows me to work with multiple project types and structures.` } 
                        model={ <LanuageStackModel 
                            rotation={[0.5, -0.5, 0]}
                            scale={ 0.85 } /> } />
                    <HomeCred 
                        index={ 3 }
                        spin
                        title='Flexible'
                        text={ `With all types of teams and individuals. My friendly yet independent personality easily fits into any group I'm matched with, wether it's design or development.` }
                        model={ <PencilModel 
                            scale={ 0.15 } /> } />
                </div>
                <ProjectsSection />
                <PackagesSection />
            </article>
        </div>
    )
}

export default Home