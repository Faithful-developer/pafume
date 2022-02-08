import "./HomePage.scss"
import Slider from "react-slick";
import Photo from '../../assets/images/slide-07.jpeg'
import HomeSlider from "../../containers/HomeSlider";
import cardIcon from '../../assets/images/icons/card.svg'
import HomeCard from "../../components/HomeCard";
import MemberPhoto from '../../assets/images/expert-01-200x200.png'
import MembersCard from "../../components/MembersCard";
import ProductImg from '../../assets/images/services-02-420x526.jpeg'
import ProductCard from "../../components/ProductCard";
import Footer from "../../containers/Footer";

const HomePage = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    const SliderData = [
        {
            id: 1,
            imgLink: Photo,
        },
        {
            id: 2,
            imgLink: Photo,
        },
        {
            id: 3,
            imgLink: Photo,
        },
        {
            id: 4,
            imgLink: Photo,
        },
        {
            id: 5,
            imgLink: Photo,
        }
    ]

    const cardInfo = [
        {
            imgLink: cardIcon,
            title: "Professional Team",
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, sint."
        },
        {
            imgLink: cardIcon,
            title: "Premium Products",
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, sint."
        },
        {
            imgLink: cardIcon,
            title: "Medical Education",
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, sint."
        },
        {
            imgLink: cardIcon,
            title: "The Last Equipment",
            overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, sint."
        }
    ]

    const members = [
        {
            name: "Alan",
            imgLink: MemberPhoto,
            position: 'Doctor in Akfa'
        },
        {
            name: "Alan",
            imgLink: MemberPhoto,
            position: 'Doctor in Akfa'
        },
        {
            name: "Alan",
            imgLink: MemberPhoto,
            position: 'Doctor in Akfa'
        },
        {
            name: "Alan",
            imgLink: MemberPhoto,
            position: 'Doctor in Akfa'
        }
    ]

    const products = [
        {
            id: 1,
            title: 'Shampoo',
            imgLink: ProductImg
        },
        {
            id: 2,
            title: 'Mask',
            imgLink: ProductImg
        },
        {
            id: 3,
            title: 'Make up',
            imgLink: ProductImg
        },
        {
            id: 4,
            title: 'Treatment',
            imgLink: ProductImg
        }
    ]

    return (
        <>
            <section className="intro">
                <Slider {...settings} >
                    {
                        SliderData.map(item => (
                            <HomeSlider
                                imgLink={item.imgLink}
                                id={item.id}
                            />
                        ))
                    }
                </Slider>
            </section>
            <section className="cards">
                <div className="container">
                    <div className="card-wrapper">
                        {
                            cardInfo.map(item => (
                                <HomeCard
                                    imgLink={item.imgLink}
                                    title={item.title}
                                    overview={item.overview}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="catalogue">
                <div className="container">
                    <div className="intro-text">
                        <h2>Our products</h2>
                        <span className="line"/>
                        <p>
                            Treat yourself to one of our signature services. Our beauty experts will make you look more beautiful and feel better than ever before.
                        </p>
                    </div>
                    <div className="catalogue-wrapper">
                        {
                            products.map(item =>(
                                <ProductCard
                                    title={item.title}
                                    id={item.id}
                                    imgLink={item.imgLink}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
            <sectioon className="members">
                <div className="container">
                    <ul className="members-wrapper">
                        {
                            members.map(person => (
                                <MembersCard
                                    imgLink={person.imgLink}
                                    name={person.name}
                                    position={person.position}
                                />
                            ))
                        }
                    </ul>
                </div>
            </sectioon>
            <Footer/>
        </>
    )
}

export default HomePage