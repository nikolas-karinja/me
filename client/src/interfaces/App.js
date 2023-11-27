import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Background from './pages/Background'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

const App = () =>
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Layout /> }>
                    <Route index element={ <Home /> } />
                    <Route path='/background' element={ <Background /> } />
                    <Route path='/contact' element={ <Contact /> } />
                    <Route path='/projects' element={ <Projects /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App