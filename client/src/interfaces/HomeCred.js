import '../sass/Home.sass'

import icon_clickable from '../img/icons/clickable.svg'

import { Canvas } from '@react-three/fiber'
import { Environment, Float, OrbitControls } from '@react-three/drei'
import { Model as Default } from '../models/Default'
import { ANIM_DELAY } from '../core'

const HomeCred = ({ title, text, model, spin, index }) =>
{
    return(
        <div className='Home--cred Clickable-module--root'
            style={{animationDelay: index ? `${ index * ANIM_DELAY.homeCards }s` : '0s'}}>
            <h3 className='text-left'>
                { (title ? title : 'A Title').toUpperCase() }
            </h3>
            <img className='Home--cred--icon' 
                src={ icon_clickable }
                alt='Clickable' />
            <div className='divider' />
            <div className='Home--cred--content'>
                <div className='Home--cred--canvas'>
                    <Canvas>
                        <Environment preset='forest' />
                        <OrbitControls
                            enableZoom={ false }
                            autoRotate={ spin ? true : false } />
                        <directionalLight
                            intensity={ 3 }
                            position={[-0.25, 0, 1]} 
                            castShadow/>
                        <Float>
                            { model ? model : <Default rotation={[0.5, 1, 0]} /> }
                        </Float>
                    </Canvas>
                </div>
                <div>{ text ? text : 'Some text goes here. It will go here and only here' }</div>
            </div>
        </div>
    )
}

export default HomeCred