import Header from '../components/layout/Header/Header'
import Navbar from '../components/layout/Navbar/Navbar'
// import Routes from '../main/Routes'
import Footer from '../components/layout/Footer/Footer'

// import { BrowserRouter } from 'react-router-dom'

import '../main/App.css'


function PageTemplate(props) {
    return (
        <div className="app">
            <Header />
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}

export default PageTemplate