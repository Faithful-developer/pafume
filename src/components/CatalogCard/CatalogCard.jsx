import './CatalogCard.scss'
import {Link} from "react-router-dom";

const CatalogCard = ({id, imgLink, title, info}) => {
    return (
        <li className='catalog-single-card' >
            <Link to={`/product/${id}`} >
                <div className="img-section">
                    <img src={imgLink} alt=""/>
                </div>
                <div className="text-section">
                    <h2>{title}</h2>
                    <p>{info}</p>
                </div>
            </Link>
        </li>
    )
}

export default CatalogCard