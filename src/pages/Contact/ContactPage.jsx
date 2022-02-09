import './ContactPage.scss'
import {Link} from "react-router-dom";
import Footer from "../../containers/Footer";

const ContactPage = () => {
    return (
        <>
            <div className="contact-intro">
                <div className="container">
                    <div className="pagination">
                        <span className='bg-title'>Contact us</span>
                        <div className="pagination-page">
                            <div className="span">
                                <Link to='/'>Home</Link>
                                <span>/</span>
                                <span>Contact</span>
                            </div>
                            <h2>Contact us</h2>
                        </div>
                        <div className="line"/>
                    </div>
                </div>
            </div>
            <div className="locations">
               <div className="container">
                   <div className="context-contact">
                       <h3>Our locations</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut ipsa magnam mollitia nisi nulla obcaecati quis quo veritatis vitae.</p>
                   </div>
                   <div className="frame">
                       <iframe title='location'
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d269.86371958801243!2d69.17278600416937!3d41.26868635985991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89e44ae85dd3%3A0xa7a38fea1f63296b!2sEVOS!5e0!3m2!1sru!2s!4v1644413850071!5m2!1sru!2s"
                           width="600" height="450" loading="lazy"/>
                   </div>
               </div>
            </div>
            <Footer/>
        </>
    )
}

export default ContactPage;