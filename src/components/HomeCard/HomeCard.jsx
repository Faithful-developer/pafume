import './HomeCard.scss'
import AOS from "aos";
import {useEffect} from "react";

const HomeCard = ({imgLink, title, overview}) => {
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, []);
    return (
        <li className='info-card' data-aos="flip-left" >
            <img src={imgLink} alt=""/>
            <h2>{title}</h2>
            <div className="dots">
                <span className="dot"/>
                <span className="dot"/>
                <span className="dot"/>
            </div>
            <p>{overview}</p>
        </li>
    )
}

export default HomeCard