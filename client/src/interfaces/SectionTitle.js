import Typewriter from 'typewriter-effect'

const SectionTitle = ({value, className}) =>
{
    return(
        <h2 className={ `PageSection-module--title ${className ? className : ''}` }>
            <Typewriter className='Typewriter-module'
                onInit={(typewriter) => 
                {
                    typewriter
                        .changeDelay(100)
                        .typeString(value ? value : 'This Is a Section')
                        .start()
                }} />
        </h2>
    )
}

export default SectionTitle