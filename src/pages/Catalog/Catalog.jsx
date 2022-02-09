import './Catalog.scss'
import {Link} from "react-router-dom";
import ProductImg from '../../assets/images/product.jpeg';
import CatalogCard from "../../components/CatalogCard";
import Footer from "../../containers/Footer";

const Catalog = () => {

    const ProductInfo = [
        {
            id: 1,
            title: 'Product 1',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg,ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
        {
            id: 2,
            title: 'Product 2',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg,ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
        {
            id: 3,
            title: 'Product 3',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg,ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
        {
            id: 1,
            title: 'Product 1',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg,ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
        {
            id: 4,
            title: 'Product 4',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg,ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
        {
            id: 5,
            title: 'Product 5',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg,ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
        {
            id: 6,
            title: 'Product 6',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg,ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
        {
            id: 7,
            title: 'Product 7',
            info: 'Lorem ipsum dolor sit amet.',
            imgLink: [ProductImg, ProductImg,ProductImg],
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto culpa delectus, expedita in inventore ipsam libero minus sapiente?",
        },
    ]

    return (
        <>
            <div className="catalog-intro">
               <div className="container">
                   <div className="pagination">
                       <span className='bg-title'>Catalog</span>
                       <div className="pagination-page">
                           <div className="span">
                               <Link to='/'>Home</Link>
                               <span>/</span>
                               <span>Catalog</span>
                           </div>
                           <h2>Catalog</h2>
                       </div>
                       <div className="line"/>
                   </div>
               </div>
            </div>
            <div className="catalog-product">
                <div className="container">
                    <ul className="catalog-product-wrapper">
                        {
                            ProductInfo.map(item => (
                                <CatalogCard
                                    id={item.id}
                                    title={item.title}
                                    imgLink={item.imgLink[0]}
                                    info={item.info}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Catalog