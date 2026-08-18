import ServiceCard from "../ServiceCard"
import { Model as SiteBuilderAdvert } from "../../models/SiteBuilderAdvert"
import { Model as MusicNotes } from "../../models/MusicNotes"
import { Model as LanguageStack } from "../../models/LanguageStack"

const ServiceCardsSection = () =>
{
    return <div className='PageSection-module--root'>
        <ServiceCard title="WEBSITE CREATION"
            model={<SiteBuilderAdvert 
                position={[0, 0.25, 0]}
                scale={1.75} />}
            content={<>
                <h3 className="title">★ Full-Code or No-Code!</h3>
                <h2>FOR ANY BUDGET!</h2>
                <p>Wether you want a full custom fleshed-out experience unique to you or a site that simply gets across your professional worth, we will work together to create something that represents you at your best. I offer all services related to Website Development. That means <b>Backend</b> stuff too!</p>
            </>} />
        <ServiceCard title={"3D WEBAPP"}
            titleAnimClass={"threedWebApp"}
            initTitleBounceDelay={0.5}
            model={<LanguageStack 
                position={[0, 0, 0]}
                scale={1} />}
            content={<>
                <h3 className="title">★ Display 3D Art and</h3>
                <h2>MAKE IT INTERACTIVE!</h2>
                <p>3D is one of the most extensive and interactive ways to show an environment or world you want to portray. I find it to be the most appealing way to show off your creative prowess. Since it's accessible through the web, everyone at anytime can see your little world of self-expression.</p>
            </>} />
        <ServiceCard title={"MUSIC SCORES"}
            titleAnimClass={"musicScores"}
            initTitleBounceDelay={1}
            avoidShowcase={true}
            model={<MusicNotes 
                position={[0, -3, 0]}
                scale={0.65} />}
            content={<>
                <h3 className="title">★ Give your project </h3>
                <h2>A MEMORABLE SOUND!</h2>
                <p>What's a movie, video game, or short-film without a stellar and deep sound? It's straight forward, so if you would like someone to compose a soundtrack for you that lasts the test of time, just shoot me a message!</p>
            </>} />
        {/* <ServiceCard /> */}
    </div>
}

export default ServiceCardsSection