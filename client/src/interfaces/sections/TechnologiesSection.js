import { ANIM_DELAY, BACKGROUND, TECHS } from '../../core'
import SectionTitle from '../SectionTitle'

const TechnologiesSection = () =>
{
    let _count = 0

    return(
        <div className='PageSection-module--root'>
            <SectionTitle
                value='Computer Languages'
                className='text-left no-top-margin' />
            <p className='text-left'>
                It all started with Khan Academy's version of JavaScript. Now it encompasses everything you see below. I hope to learn more, I'm especially looking into working with Rust, Ruby on Rails, and GLSL in my free-time in between college courses.
            </p>
            <div className='Technologies-section--container'>
                {BACKGROUND.languages.map((p) => 
                {
                    _count++

                    return <img
                        key={Math.random()}
                        style={{animationDelay: `${_count * ANIM_DELAY.backgroundTechs}s`}}
                        src={TECHS[p].icon}
                        alt='Tech' />
                }) }
            </div>
            <SectionTitle
                value='Environments & Frameworks'
                className='text-right' />
            <p className='text-right'>
                If you will believe it, I used to be too scared to use a framework such as React. I was so used to working with the raw DOM API that it seemed like a high mountain to overcome. Now that I have climbed the peak, I can't stop the adrenaline. React has become my best friend and Three.js my canvas.
            </p>
            <div className='Technologies-section--container'>
                {BACKGROUND.fnv.map((p) => 
                {
                    _count++

                    return <img
                        key={Math.random()}
                        style={{animationDelay: `${_count * ANIM_DELAY.backgroundTechs}s`}}
                        src={TECHS[p].icon}
                        alt='Tech' />
                }) }
            </div>
        </div>
    )
}

export default TechnologiesSection