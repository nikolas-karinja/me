import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import BackgroundPage from './pages/BackgroundPage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'
import DashboardPage from './pages/DashboardPage'
import DefaultPage from './pages/DefaultPage'

const App = () =>
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Layout /> }>
                    <Route index element={ <HomePage /> } />
                    <Route path='/background' element={ <BackgroundPage /> } />
                    <Route path='/blog' element={ <DefaultPage /> } />
                    <Route path='/contact' element={ <ContactPage /> } />
                    <Route path='/products' element={ <DefaultPage /> } />
                    <Route path='/projects' element={ <ProjectsPage /> } />
                    <Route path='/dashboard' element={ <DashboardPage /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App