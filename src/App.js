import './assets/styles/main.scss'
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import Header from "./containers/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos'
import 'aos/dist/aos.css';
import {useState} from "react";
import HeaderMobile from "./containers/HeaderMobile";
import ContactPage from "./pages/Contact";
import Catalog from "./pages/Catalog";
import ProductPage from "./pages/ProductPage";

const App = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    mobileMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

    return (
        <div className="App">
            <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>
            <HeaderMobile mobileMenu={mobileMenu}  setMobileMenu={setMobileMenu} />
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route
                    path="/home"
                    element={<Navigate to="/"/>}
                />
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/catalog' element={<Catalog/>} />
                <Route path='/product/:id' element={<ProductPage/>} />
                <Route path='/contact' element={<ContactPage/>} />
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
