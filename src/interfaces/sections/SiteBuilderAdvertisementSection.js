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
                    <p>Shoot me a message with a brief description of your idea, your full name, and contact (email, number, etc.) if your interested and I'll get back to you ASAP! Or book an appointment with me based upon my availability. Just click the button below to get started!</p>
                </div>
                <div className="SiteBuilderAdvertisement-section--card">

                </div>
            </div>
        </div>
    </div>
}

export default SiteBuilderAdvertisementSection