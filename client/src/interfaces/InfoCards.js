import InfoCard from "./InfoCard"

const InfoCards = ({className, data}) =>
{
    let _count = 0

    return (
        <div className={`InfoCards-module ${className ? className : ''}`}>
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