const ProjectsSectionRow = ({ flipped }) =>
{
    return(
        <div className={ `Projects-section--row ${ flipped ? 'reversed' : '' }` }>
            <div className={ `Projects-section--card ${ flipped ? 'darken borderRadius--0001' : 'borderRadius--1000' }` }>

            </div>
            <div className={ `Projects-section--card ${ flipped ? 'darken borderRadius--0100' : 'borderRadius--0010' }` }>

            </div>
        </div>
    )
}

export default ProjectsSectionRow