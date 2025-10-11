import icon_magnifier from '../img/icons/magnifier.svg'

const BlogSearchBar = ({onChange}) =>
{
    return (
        <div className='BlogSearchBar-module--wrapper'>
            <div className='BlogSearchBar-module--bar'>
                <img className='BlogSearchBar-module--bar--icon'
                    src={icon_magnifier}
                    alt='icon' />
                <input className='BlogSearchBar-module--bar--input'
                    placeholder='Type keywords here...'
                    onChange={onChange} />
            </div>
            <button className='BlogSearchBar-module--refresh'>
                Refresh DB
            </button>
        </div>
    )
}

export default BlogSearchBar