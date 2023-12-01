import * as ReactDOM from 'react-dom/client'
import App from '../interfaces/App'
import { EVENTS_LIST, EVENTS_STORED } from '.'

export const addEventListener = (name, method) => 
{
    window.addEventListener(name, method)
}

export const dispatchEvent = (name) =>
{
    window.dispatchEvent(EVENTS_STORED[name])
}

export const initEvents = async () =>
{
    for (const e in EVENTS_LIST)
    {
        EVENTS_STORED[e] = new Event(e)
    }

    return
}

export const initSite = async () =>
{
    await initEvents()

    window.ReactRoot = ReactDOM.createRoot(document.getElementById('root'))
    window.ReactRoot.render(<App />)
}

export const setPageTitle = (value) =>
{
    document.head.querySelector('title').innerHTML = value
}