import './Header.scss';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import xHeaderMenu from '../../assets/images/icons/burger-x.svg'
import burgerMenu from '../../assets/images/icons/burger-menu.svg'

const Header = ({mobileMenu, setMobileMenu}) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`header ${scrollPosition > 200 ? 'active' : ''}`} >
                <div className="container">
                    <button onClick={event => setMobileMenu(!mobileMenu) } className='mobile-header-button' >
                        {
                            mobileMenu ? (
                                <img src={xHeaderMenu} alt=""/>
                            ) : (
                                <img src={burgerMenu} alt=""/>
                            )
                        }
                    </button>
                    <div className='header-left'>
                        <Link to='/'>
                            NL
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
        </>
    )
}

export default Header