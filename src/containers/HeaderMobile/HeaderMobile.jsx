import './HeaderMobile.scss'
import {Link} from "react-router-dom";

const HeaderMobile = ({mobileMenu, setMobileMenu}) => {
    return (
        <>
            <div className={`shadow ${mobileMenu ? 'active': ''}`} />
            <header className={`header-mobile ${mobileMenu ? 'active' : ''}`} >
                <ul className='header-mobile-linkers' >
                    <li>
                        <Link to='/' onClick={event => setMobileMenu(!mobileMenu)} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' onClick={event => setMobileMenu(!mobileMenu)} >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/catalog' onClick={event => setMobileMenu(!mobileMenu)} >
                            Catalog
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact-us' onClick={event => setMobileMenu(!mobileMenu)} >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default HeaderMobile