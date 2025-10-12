import BouncingTextInsert from "../BouncingTextInsert"

const SiteBuilderAdvertisementSection = () =>
{

    return <div className='PageSection-module--root'>
        <div className="SiteBuilderAdvertisement-section--container">
            <h1 className="text-center bouncing-text">
                <BouncingTextInsert text={"I'LL BUILD YOUR SITE!"} />
            </h1>
            <div className="SiteBuilderAdvertisement-section--content">
                <div className="SiteBuilderAdvertisement-section--card">
                    <h3>★ Full-Code or No-Code!</h3>
                    <p>Shoot me a <b>message</b> with a brief description of your idea, your full name, and contact (email, number, etc.). If you want your programmer, designer, and stylizer all in one person, I'm your helping hand! I work in <b>all budget ranges!</b> if your interested just <b>message</b> me and I'll get back to you <b>ASAP</b>! Or book an <b>appointment</b> with me based upon my availability.</p>
                    <p className="text-center"><b>Click one below to get started!</b></p>
                    <div className="SiteBuilderAdvertisement-section--buttons">
                        <button>
                            <h3>Message Me!</h3>
                        </button>
                        <button className="apt">
                            <h3>Book Appointment</h3>
                        </button>
                    </div>
                </div>
                <div className="SiteBuilderAdvertisement-section--card">

                </div>
            </div>
        </div>
    </div>
}

export default SiteBuilderAdvertisementSection