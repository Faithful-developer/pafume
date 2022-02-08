import './MembersCard.scss';
import {useEffect} from "react";
import AOS from "aos";

const MembersCard = ({imgLink, name, position}) => {
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, []);
    return (
        <li className='members-card' data-aos="fade-up" >
            <img src={imgLink} alt=""/>
            <div className="members-info">
                <h3>{name}</h3>
                <p>{position}</p>
            </div>
        </li>
    )
}

export default MembersCard