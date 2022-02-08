import './ProductCard.scss'
import {Link} from "react-router-dom";
import {useEffect} from "react";
import AOS from "aos";

const ProductCard = ({title, imgLink, id}) => {
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, []);
    return (
        <li className='product-card' data-aos="fade-down" >
            <Link to={`/product/${id}`} >
                <img src={imgLink} alt=""/>
                <h3>{title}</h3>
            </Link>
        </li>
    )
}

export default ProductCard