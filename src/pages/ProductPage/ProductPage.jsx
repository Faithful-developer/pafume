import './ProductCard.scss';
import {useParams} from "react-router-dom";

const ProductPage = () => {

    const {id} = useParams();

    return (
        <h1>Product Page {id} </h1>
    )
}

export default ProductPage