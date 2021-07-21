import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import sliderImg from '../images/slider.png';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

function Slider() {

    return (
        // <aside className="slider">
        //     <ul className="content">
        //         <li className="cover-bg" style={{"backgroundImage": "url('img/slider.png')"}}>
        //             <div className="container">
        //                 <div className="slider__content">
        //                     <h2 className="slider__h2">Wieloletnie doświadczenie</h2>
        //                     <p className="slider__p">Wiemy jak trudna jest organizacja i poprowadzenie remontu nawierzchni.
        //                         Dlatego pomagamy od początku do końca jego realizacji.</p>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="cover-bg" style={{"backgroundImage": "url('img/slider.png')"}}>
        //             <div className="container">
        //                 <div className="slider__content">
        //                     <h2 className="slider__h2">Wieloletnie doświadczenie</h2>
        //                     <p className="slider__p">Wiemy jak trudna jest organizacja i poprowadzenie remontu nawierzchni.
        //                         Dlatego pomagamy od początku do końca jego realizacji. 2</p>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="cover-bg" style={{"backgroundImage": "url('img/slider.png')"}}>
        //             <div className="container">
        //                 <div className="slider__content">
        //                     <h2 className="slider__h2">Wieloletnie doświadczenie</h2>
        //                     <p className="slider__p">Wiemy jak trudna jest organizacja i poprowadzenie remontu nawierzchni.
        //                         Dlatego pomagamy od początku do końca jego realizacji. 3</p>
        //                 </div>
        //             </div>
        //         </li>
        //         <li><picture><img src={sliderImg} alt="" /></picture></li>
        //     </ul>
        //     <ul className="nav fade fadein fadeinstart">
        //         <li><a className="active "></a></li>
        //         <li><a className=""></a></li>
        //         <li><a className=""></a></li>
        //     </ul> 
        // </aside>
        <Splide options={{
            arrows: false,
            autoplay: true,
            interval: 3000,
            pauseOnFocus: false,
            type: 'loop',
            resetProgress: false,
            focus: 'center',
        }}>
            <SplideSlide>
                <img src={sliderImg} alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
                <img src={sliderImg} alt="Image 2"/>
            </SplideSlide>
            <SplideSlide>
                <img src={sliderImg} alt="Image 3"/>
            </SplideSlide>
        </Splide>
    )
}

export default Slider;