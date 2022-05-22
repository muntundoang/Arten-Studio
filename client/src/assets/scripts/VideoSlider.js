import React, { useState } from 'react'
import '../css/videoSlider.css'
import { VideoData } from './videoData'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const VideoSlider = ({ videos }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const length = videos.length

    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };
    if (!Array.isArray(videos) || videos.length <= 0) {
        return null;
    }

    // console.log(currentIndex);

    return (
        <section className='slider'>
            <FaArrowCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowCircleRight className='right-arrow' onClick={nextSlide} />
            {VideoData.map((slide, index) => {
                return (
                    <div
                        className={index === currentIndex ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === currentIndex && (
                            <iframe
                                className='image'
                                src={slide.video}
                                title={slide.title}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default VideoSlider