import icon_send from "../../img/icons/send.svg"
import icon_loading from "../../img/icons/loading.svg"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const MessageSection = () =>
{
    const [_service, setService] = useState("Website")
    const [_name, setName] = useState("")
    const [_email, setEmail] = useState("")
    const [_phone, setPhone] = useState("")
    const [_message, setMessage] = useState("")
    const [_msgSending, setMsgSending] = useState(false)
    const [_msgSuccess, setMsgSuccess] = useState(0)
    
    const _handleSubmit = (e) =>
    {
        e.preventDefault()

        const _serviceId = "service_6bx2auv"
        const _templateId = "template_o085kfa"
        const _publicKey = "6h7sa3iBLRCpPxZs2"

        const _templateParams = {
            service: _service,
            from_name: _name,
            from_email: _email,
            from_phone: _phone,
            message: _message,
            to_name: "Nikolas Karinja",
        }

        setMsgSending(true)

        emailjs.send(_serviceId, _templateId, _templateParams, _publicKey)
            .then((response) =>
            {
                console.log("Email sent successfully!", response)

                // setService("Website")
                // setName("")
                // setEmail("")
                // setPhone("")
                // setMessage("")

                setMsgSuccess(1)

                setTimeout(() => 
                {
                    setMsgSending(false)
                    setMsgSuccess(0)
                }, 3000)
            })
            .catch((error) =>
            {
                console.error("Error sending email: ", error)

                setMsgSuccess(2)

                setTimeout(() => 
                {
                    setMsgSending(false)
                    setMsgSuccess(0)
                }, 3000)
            })
    }

    return <div className='PageSection-module--root'>
        <form onSubmit={_handleSubmit}>
            <div className="Message-section--container">
            <div className="Message-section--sending"
                style={{display: _msgSending ? "block" : "none"}}>
                <img style={{display: _msgSuccess === 0 ? "block" : "none"}}
                    src={icon_loading}
                    alt="Sending" />
                <h2 style={{display: _msgSuccess === 1 ? "block" : "none"}}>
                    Success! I will get back to you ASAP!
                </h2>
                <h2 style={{display: _msgSuccess === 2 ? "block" : "none"}}>
                    Message didnt go through... try again
                </h2>
            </div>
            {/* <h1 className="text-center bouncing-text">
                <BouncingTextInsert text={"PUT IT ALL DOWN!"} />
            </h1> */}
            <div className="Message-section--content">
                <div className="Message-section--card">
                    <h3 className="title">★ Service</h3>
                    <select onChange={(e) => setService(e.target.value)}>
                        <option value={"Website"}>Website</option>
                        <option value={"3D WebApp"}>3D WebApp</option>
                    </select>
                    <h3 className="title">★ Name</h3>
                    <input onChange={(e) => setName(e.target.value)} 
                        placeholder={"Johnny Appleseed"} />
                    <h3 className="title">★ Email</h3>
                    <input onChange={(e) => setEmail(e.target.value)}
                        placeholder={"someone@example.com"}
                        type="email" />
                    <h3 className="title">★ Mobile Number</h3>
                    <input onChange={(e) => setPhone(e.target.value)}
                        placeholder={"(123) 456-7890"}
                        type={"tel"} />
                </div>
                <div className="Message-section--card">
                    <h3 className="title">★ Message</h3>
                    <textarea onChange={(e) => setMessage(e.target.value)} />
                </div>
            </div>
            <div className="Message-section--buttons">
                <button className="apt">
                    <h3>Send Message</h3>
                    <img src={icon_send}
                        alt="Send MSG" />
                </button>
            </div>
        </div>
        </form>
    </div>
}

export default MessageSection