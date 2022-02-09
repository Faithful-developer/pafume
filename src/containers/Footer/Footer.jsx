import './Footer.scss'
import {Link} from "react-router-dom";
import instagramIcon from '../../assets/images/icons/instagram.svg'
import facebookIcon from '../../assets/images/icons/facebook.svg'
import telegramIcon from '../../assets/images/icons/telegram.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="box main">
                    <Link to='/' className='logo' >
                        NL
                    </Link>
                    <ul className="social-networks">
                        <li>
                            <a href="https://google.com">
                                <img src={instagramIcon} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="https://google.com">
                                <img src={facebookIcon} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="https://google.com">
                                <img src={telegramIcon} alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="box pages">
                    <h3>Quick links</h3>
                    <ul>
                        <li>
                            <Link to='/' >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='/catalog' >
                                Catalog
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact-us' >
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="box contacts">
                    <h3>
                        Contacts
                    </h3>
                    <ul>
                        <li>
                            <a href="https://google.com" className='location' >
                                646 Heritage St. Los Angeles, CA 93635s
                            </a>
                        </li>
                        <li>
                            <a href="https://google.com" className='phone' >
                                +998 (97) 777 77 77
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer