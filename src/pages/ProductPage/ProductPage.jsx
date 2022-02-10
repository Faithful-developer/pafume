import './ProductCard.scss';
import {Link, useParams} from "react-router-dom";
import ProductImg from "../../assets/images/product.jpeg";
import Footer from "../../containers/Footer";

const ProductPage = () => {

    const {id} = useParams();

    function findArrayElementByTitle(array, idNumber) {
        return array.find((element) => {
            return element.id === idNumber;
        })
    }

    const ProductInfo = [
        {
            id: 1,
            title: 'Product 1',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg, ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
        {
            id: 2,
            title: 'Product 2',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg, ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
        {
            id: 3,
            title: 'Product 3',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg, ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
        {
            id: 1,
            title: 'Product 1',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg, ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
        {
            id: 4,
            title: 'Product 4',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg, ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
        {
            id: 5,
            title: 'Product 5',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg, ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
        {
            id: 6,
            title: 'Product 6',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg, ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
        {
            id: 7,
            title: 'Product 7',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg, ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
    ]

    let product = findArrayElementByTitle(ProductInfo, parseInt(id))

    return (
        <>
            <div className="product-page-wrapper">
                <div className="container">
                    <div className="pagination">
                        <span className='bg-title'>Product</span>
                        <div className="pagination-page">
                            <div className="span">
                                <Link to='/'>Home</Link>
                                <span>/</span>
                                <span>Product</span>
                            </div>
                            <h2>Product</h2>
                        </div>
                        <div className="line"/>
                    </div>
                </div>
            </div>
            <div className="product-info">
                <div className="container">
                    <div className="product-info-img">
                        {
                            product.imgLink.map(item => (
                                <img src={item} alt=""/>
                            ))
                        }
                    </div>
                    <div className="product-info-text">
                        <h1>{product.title}</h1>
                        <p>Overview: {product.overview}</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ProductPage