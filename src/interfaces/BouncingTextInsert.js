const BouncingTextInsert = ({text}) =>
{
    let _text = []
    let _count = 0

    const _tempText = text.split("")

    for (let i of _tempText)
    {
        _text.push(<span style={{
            animationDelay: `${0.025 * _count}s`
        }}>{i}</span>)

        _count++
    }

    return <>
        {_text}
    </>
}

export default BouncingTextInsert