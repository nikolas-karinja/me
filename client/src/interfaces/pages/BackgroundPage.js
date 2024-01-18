import art_backgroundTitle from '../../img/background-title.png'

import TechnologiesSection from "../sections/TechnologiesSection"
import { Model as IbmPc5150Model } from '../../models/IBMPC5150'
import SectionTitle from '../SectionTitle'
import { setPageTitle } from '../../core/utils'
import PageLayoutNormal from '../PageLayoutNormal'
import CanvasSetup from '../CanvasSetup'
import ThreeModelPageWrapper from '../ThreeModelPageWrapper'

const BackgroundPage = () =>
{
    setPageTitle('Background')

    return(
        <PageLayoutNormal
            titleArtImg={art_backgroundTitle}>
            <ThreeModelPageWrapper>
                <CanvasSetup 
                    model={<IbmPc5150Model
                    position={[0, 0.5, 0]}
                    rotation={[0, 0.5, 0]}
                    scale={2} />} />
            </ThreeModelPageWrapper>
            <p>
                I have been working on software since I was 12. It all started because I was fascinated by old hardware in computers, mostly with the interest in how all of it functioned. At first I thought it would be relatively easy to break down because it was "ancient" technology. Soon I realized that under the hood was lines of data that I could barely comprehend. So what did I do? I learned to understand it.
            </p>
            <TechnologiesSection />
            <SectionTitle 
                className='text-left' 
                value='Why did I start programming?' />
            <p className='text-left'>
                I actually got into web-based development due to one game. It's called <a href='https://lo-th.github.io/3d.city/'>3D.CITY</a>, which was based on <a href='https://www.graememcc.co.uk/micropolisJS/'>microplisJS</a>. At the time I was around 12 and I was playing games such as Simcity 3000 and City Skylines. I had this fantasy of developing my very own city-builder. When I saw it could be done on the web, I wanted to build one myself. I started to mess around with the lines and textures of 3D.CITY's source code and I created my own modified version of the game. I called it VidCity Online.
                <br /><br />
                Later on throughout my teenage years, I worked on multiple ideas for a game similar to the Sid Meier's Civilization, Age of Empires, and Europa Universalis franchises. Unfortunately any development that was made and all those games I designed in that past were based on very beginner methods of coding and are very unoptimized. I'm sure one day I'll have a log of all my previous work.
            </p>
        </PageLayoutNormal>
    )
}

export default BackgroundPage