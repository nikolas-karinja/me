import { useState } from "react"
import { SOUNDS } from "../core"

const SiteEntry = () =>
{
    const [visible, setVisible] = useState(true)

    const _onPointerUp = () =>
    {
        SOUNDS.welcome.play()

        setVisible(false)
    }

    return <div className="SiteEntry-module"
        style={{display: visible ? "block" : "none"}}>
        <div className="SiteEntry-module--card">
            <div className="SiteEntry-module--pin">★</div>
            <div className="SiteEntry-module--content">
                <h3>Hello Scallywag!</h3>
                <p>Upon entering this site understand there is noise and you must agree that it's #awesome.</p>
                <div className="SiteEntry-module--button"
                    onPointerUp={_onPointerUp}>
                    Bring it on..
                </div>
            </div>
        </div>
    </div>
}

export default SiteEntry