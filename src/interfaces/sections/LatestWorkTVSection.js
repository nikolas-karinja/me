import hdr_emptyWarehouse01 from '../../img/hdr/empty_warehouse_01_1k.hdr'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Float, useGLTF, useAnimations, PerspectiveCamera } from '@react-three/drei'
import { Model as DefaultModel } from '../../models/Default'
import { useEffect, useRef, useState } from 'react'
import { SOUNDS } from '../../core'
import { Html } from '@react-three/drei'
import img_testGif from "../../img/tv/test_4.gif"
import img_hourglassRetro from "../../img/tv/hourglass_retro.gif"
import { CanvasWrapper } from '@isaac_ua/drei-html-fix'
import CanvasHtmlWrapper from '../CanvasHtmlWrapper'

const AnimatedModel = ({modelPath}) =>
{
    const groupRef = useRef();

    const {scene, animations} = useGLTF(modelPath)
    const {actions} = useAnimations(animations, groupRef)

    const _playAnimation = (anim) =>
    {
        const action = actions[anim]

        if (action)
        {
            action.reset()
            action.setLoop(2200, 1)
            action.play()
        }
    }

    const _handleModelClick = (e) => 
    {
        e.stopPropagation()

        const _name = e.object.name

        if (_name === "Source" || _name === "Cycle")
        {
            SOUNDS.tvButtonSmall.play()

            if (_name === "Source")
                _playAnimation("Source")
            else
            {
                _playAnimation("Cycle")
            }
        }
        else if (_name === "Okay")
        {
            SOUNDS.tvButtonBig.play()

            _playAnimation("Okay")
        }
    }

    const _handleModelPointerOver = (e) => 
    {
        e.stopPropagation()

        const _name = e.object.name

        if (_name === "Source" || 
            _name === "Cycle" ||
            _name === "Okay")
        {
            document.body.style.cursor = "pointer"
        }
    }

    const _handleModelPointerOut = (e) => 
    {
        e.stopPropagation()

        const _name = e.object.name

        if (_name !== "Source" && 
            _name !== "Cycle" &&
            _name !== "Okay")
        {
            document.body.style.cursor = "auto"
        }
    }

    return <primitive ref={groupRef} 
        object={scene} 
        onClick={_handleModelClick}
        onPointerOver={_handleModelPointerOver}
        onPointerOut={_handleModelPointerOut}
        dispose={null} />
}

const LatestWorkTVSection = () =>
{
    const _calcZ = () =>
    {
        if (window.innerWidth <= 1200)
            return 16
        else
            return 10.5
    }

    const [_z, _setZ] = useState(_calcZ())

    useEffect(() =>
    {
        window.addEventListener("resize", () =>
        {
            _setZ(_calcZ())
        })
    }, [])

    const boomBap = (e) =>
    {
        const boom = [
            "Hello World!!",
            "Coming Soon..",
            "We're working on it."
        ]

        e.target.innerHTML = boom[Math.floor(Math.random() * boom.length)]
    }

    return <div className="PageSection-module--root fillScreen overlay">
        <CanvasHtmlWrapper className="CanvasSetup-module noDrag"
            containerStyle={{
                width: "100%",
                height: "100%",
            }}
            dpr={[1, 2]}>
            <Environment files={hdr_emptyWarehouse01} />
            <PerspectiveCamera makeDefault position={[0, 0.5, _z]} fov={50} />
            <directionalLight
                intensity={3}
                position={[-0.25, 0, 1]} 
                castShadow />
            <Float>
                <AnimatedModel modelPath="./assets/models/TV.glb" />
                <Html className='LatestWorkTV-section--css3d'
                    position={[0, 0, 1.2]} 
                    center transform occlude>
                    <img className="bg" 
                        src={img_testGif}
                        alt="test" />
                    <div className="wip">
                        <span>Coming Soon</span> 
                        <img src={img_hourglassRetro}
                            alt="test" />
                    </div>
                </Html>
            </Float>
        </CanvasHtmlWrapper>
    </div>
}

export default LatestWorkTVSection