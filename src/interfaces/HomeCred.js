import '../sass/Home.sass'
import '../sass/Modules.sass'

import icon_clickable from '../img/icons/clickable.svg'

import { Canvas } from '@react-three/fiber'
import { Environment, Float, OrbitControls } from '@react-three/drei'
import { Model as Default } from '../models/Default'

const HomeCred = ({ title, text, model, spin }) =>
{
    return(
        <div className='Home--cred Clickable-module--root'>
            <div className='Home--cred--title'>{ title ? title : 'A Title' }</div>
            <img className='Home--cred--icon' 
                src={ icon_clickable }
                alt='Clickable' />
            <div className='Home--cred--divider'></div>
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