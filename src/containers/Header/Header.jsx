import './Header.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className='header-left'>
                    <Link to='/'>
                        N/L
                    </Link>
                </div>
                    <ul className='header-center' >
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='about'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='/catalog'>
                                Catalog
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                <div className='header-right'>
                    <a href="tel: +998 (97) 777 777 77">
                        +998 (97) 777 777 77
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header