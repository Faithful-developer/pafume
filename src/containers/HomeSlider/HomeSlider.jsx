import './HomeSlider.scss'
import {useEffect} from "react";
import AOS from 'aos'

const HomeSlider = ({id, imgLink}) => {
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, []);
    return (
        <>
            <div className="home-slider">
              <div className="container">
                  <div className="content" data-aos="fade-up" >
                      <h1>Home Slider {id} </h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, asperiores commodi cumque
                          dolorum eveniet expedita incidunt iste laudantium magnam natus nostrum odit rerum sequi unde
                          vitae! A atque autem deserunt, dolorum earum id modi molestias officia omnis possimus,
                          repudiandae soluta suscipit vel. A blanditiis cum error nulla quia saepe voluptatem.</p>
                  </div>
              </div>
                <img src={imgLink} alt=""/>
            </div>
        </>
    )
}

export default HomeSlider