import React, { useState } from 'react'
import '../css/slider.css'
import { SliderData } from './sliderData'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    // console.log(currentIndex);

    return (
        <section className='slider'>
            <FaArrowCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === currentIndex ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === currentIndex && (
                            <img src={slide.image} alt='travel' className='image' />
                        )}
                    </div>
                )
            })}          
        </section>
    )
}

export default ImageSlider