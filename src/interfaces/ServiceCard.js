import BouncingTextInsert from "./BouncingTextInsert"
import icon_bookAppointment from "../img/icons/book_appointment.svg"
import icon_messageMe from "../img/icons/message_me.svg"
import CanvasSetup from "./CanvasSetup"
import { Model as SiteBuilderAdvert } from '../models/SiteBuilderAdvert'
import { Link } from "react-router-dom"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

const ServiceCard = ({content, flipped, model, avoidShowcase, title, titleAnimClass, initTitleBounceDelay}) =>
{
    const heightRef = useRef(null)
    const [height, setHeight] = useState(0)

    const _handleBookAppointment = () =>
    {
        alert("Feature not available yet :(")
    }

    useLayoutEffect(() => 
    {
        if (heightRef.current)
            setHeight(heightRef.current.offsetHeight + 32)
    }, [])

    useEffect(() => 
    {
        window.addEventListener('resize', () => 
        {
            if (heightRef.current)
                setHeight(heightRef.current.offsetHeight + 32)
        })
    }, [])

    return <div className='PageSection-module--root'>
        <div className="ServiceCard-section--container">
            <h1 className={`text-center bouncing-text ${titleAnimClass}`}>
                <BouncingTextInsert text={title}
                    initialDelay={initTitleBounceDelay} />
            </h1>
            <div className={`ServiceCard-section--content ${flipped ? "flipped" : ""}`}>
                <div className="ServiceCard-section--card">
                    <div style={{width: "100%", height: "min-content"}} 
                        ref={heightRef}>
                        {content}
                    </div>
                </div>
                <div className="ServiceCard-section--card"
                    style={{height: `${height}px`}}>
                    <CanvasSetup autoRotateSpeed={0}
                        model={model} />
                </div>
                <div className="ServiceCard-section--card"
                    style={{height: `${height}px`}}>
                    <div className="ServiceCard-section--buttons">
                        <Link to={"/message"}>
                            <button>
                                <h3>Message Me!</h3>
                                <img src={icon_messageMe}
                                    alt="Message Me" />
                            </button>
                        </Link>
                        <button className="sc"
                            style={{display: avoidShowcase ? "none" : "block" }}
                            onClick={_handleBookAppointment}>
                            <h3>View Showcase</h3>
                            <img src={icon_bookAppointment}
                                alt="View Showcase" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ServiceCard