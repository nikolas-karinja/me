import art_wipTitle from '../../img/wip-title.png'

import PageLayoutNormal from "../PageLayoutNormal"

const DefaultPage = () =>
{
    return (
        <PageLayoutNormal
            titleArtImg={art_wipTitle}>
            <p>Under construction ⚒️</p>
        </PageLayoutNormal>
    )
}

export default DefaultPage