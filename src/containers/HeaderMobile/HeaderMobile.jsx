import './HeaderMobile.scss'
import {Link} from "react-router-dom";

const HeaderMobile = ({mobileMenu}) => {
    return (
        <>
            <div className={`shadow ${mobileMenu ? 'active': ''}`} />
            <header className={`header-mobile ${mobileMenu ? 'active' : ''}`} >
                <ul className='header-mobile-linkers' >
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/catalog'>
                            Catalog
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact-us'>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default HeaderMobile