import BouncingTextInsert from "../BouncingTextInsert"
import icon_messageMe from "../../img/icons/message_me.svg"
import { Link } from "react-router-dom"

const ContactMessageMeSection = () =>
{

    return <div className='PageSection-module--root'>
        <div className="ContactMessageMe-section--container">
            <h1 className="text-center bouncing-text">
                <BouncingTextInsert text={"Message Me!"} />
            </h1>
            <div className="ContactMessageMe-section--content">
                <div className="ContactMessageMe-section--card">
                    <h3 className="title">★ Contact me about my services!</h3>
                    
                </div>
                <div className="ContactMessageMe-section--card">
                    <div className="ContactMessageMe-section--buttons">
                        <Link to={"/message"}>
                            <button>
                                <h3>Message Me!</h3>
                                <img src={icon_messageMe}
                                    alt="Message Me" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ContactMessageMeSection