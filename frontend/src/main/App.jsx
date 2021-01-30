import PageTemplate from '../pages/PageTemplate'
import Routes from './Routes'

import Header from '../components/layout/Header/Header'
import Navbar from '../components/layout/Navbar/Navbar'
// import Routes from '../main/Routes'
import Footer from '../components/layout/Footer/Footer'

// import { BrowserRouter } from 'react-router-dom'

import '../main/App.css'

import { BrowserRouter } from 'react-router-dom'

function App(props) {
    return (
        <div className="app">
            <Header />
            <Navbar />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App