import { setPageTitle } from '../../core/utils'
import art_contactTitle from '../../img/contact-title.png'
import InternalMenu from '../InternalMenu'
import ExternalMenu from '../ExternalMenu'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, OrbitControls } from '@react-three/drei'
import { Model as OldMobilePhoneModel } from '../../models/OldMobilePhone'

const Contact = () =>
{
    setPageTitle('Contact')

    return(
        <>
            <div className='PageLayout-module--root'>
                <div className='PageLayout-module--page'>
                    <article>
                        <img className='PageLayout-module--page--title'
                            src={ art_contactTitle }
                            alt='Title' />
                        <div className='ThreeModel-module page'>
                            <Canvas>
                                <Environment preset='forest' />
                                <OrbitControls
                                    enableZoom={ false } />
                                <directionalLight
                                    intensity={ 3 }
                                    position={[-0.25, 0, 1]} 
                                    castShadow/>
                                <Float>
                                    <OldMobilePhoneModel
                                        position={[0, -1, 0]}
                                        scale={0.5} />
                                </Float>
                            </Canvas>
                        </div>
                    </article>
                </div>
            </div>
            <div className='PageLayout-module--horizontal'>
                <InternalMenu />
                <ExternalMenu />
            </div>
        </>
    )
}

export default Contact