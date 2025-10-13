import { setPageTitle } from '../../core/utils'
import art_wipTitle from '../../img/wip-title.png'
import PageLayoutNormal from '../PageLayoutNormal'
import MessageSection from '../sections/MessageSection'

const MessagePage = () =>
{
    setPageTitle('Message Me!')

    return(
        <PageLayoutNormal
            titleArtImg={art_wipTitle}>
            <p>Shoot me a message relating to any service I provide! Just select the service your are messaging me for, provide your contact deals in the form, and compose something. This goes to my direct email so you will get a response ASAP!</p>
            <MessageSection />
        </PageLayoutNormal>
    )
}

export default MessagePage