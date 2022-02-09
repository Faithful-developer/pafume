import "./AboutPage.scss";
import {Link} from "react-router-dom";
import someInfoImg from '../../assets/images/about-intro.jpeg'
import Footer from "../../containers/Footer";

const AboutPage = () => {
    return (
        <>
            <div className="about-intro">
                <div className="container">
                    <div className="pagination">
                        <span className='bg-title'>About us</span>
                        <div className="pagination-page">
                            <div className="span">
                                <Link to='/'>Home</Link>
                                <span>/</span>
                                <span>About</span>
                            </div>
                            <h2>About us</h2>
                        </div>
                        <div className="line"/>
                    </div>
                    <div className="some-info">
                        <img src={someInfoImg} alt=""/>
                        <div className="content">
                            <h3>A Few Words About Our Service</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, consequatur cumque error
                                facere fuga maxime molestiae sit. Nisi, saepe totam!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AboutPage