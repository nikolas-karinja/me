import hdr_emptyWarehouse01 from '../img/hdr/empty_warehouse_01_1k.hdr'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Float } from '@react-three/drei'
import { Model as DefaultModel } from '../models/Default'

const CanvasSetup = ({spin, model}) =>
{
    return (
        <Canvas>
            <Environment files={hdr_emptyWarehouse01} />
            <OrbitControls
                enableZoom={false}
                autoRotate={spin ? true : false} />
            <directionalLight
                intensity={3}
                position={[-0.25, 0, 1]} 
                castShadow />
            <Float>
                {model ? model : <DefaultModel rotation={[0.5, 1, 0]} />}
            </Float>
        </Canvas>
    )
}
export default CanvasSetup