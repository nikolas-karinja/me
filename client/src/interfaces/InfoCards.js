import InfoCard from "./InfoCard"

const InfoCards = ({data}) =>
{
    let _count = 0

    return (
        <div className='InfoCards-module'>
            {data.map((i) => {
                _count++

                return <InfoCard
                    index={_count}
                    spin={i.spin}
                    title={i.title}
                    text={i.info}
                    primary={i.primary}
                    model={i.model} />
            })}
        </div>
    )
}

export default InfoCards