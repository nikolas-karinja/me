import hdr_emptyWarehouse01 from '../img/hdr/empty_warehouse_01_1k.hdr'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Float } from '@react-three/drei'
import { Model as DefaultModel } from '../models/Default'
import { SOUNDS } from '../core'

const CanvasSetup = ({model}) =>
{
    const _rotateMult = Math.random() > 0.5 ? 1 : -1

    const _onDrag = () =>
    {
        SOUNDS.threeModelSwoosh.play()
    }

    return (
        <Canvas onPointerDown={_onDrag}
        className="CanvasSetup-module">
            <Environment files={hdr_emptyWarehouse01} />
            <OrbitControls
                autoRotateSpeed={4 * _rotateMult}
                enableZoom={false}
                autoRotate={true} />
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