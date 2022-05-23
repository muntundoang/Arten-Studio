import React from 'react'
// import ImageSlider from '../assets/scripts/ImageSlider'
// import { SliderData } from '../assets/scripts/sliderData'
import { VideoData } from '../assets/scripts/videoData'
import VideoSlider from '../assets/scripts/VideoSlider'


function HomeBody() {

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-20 mx-[192px] flex flex-wrap">
                    <div className="flex w-full mb-20 items-center justify-center">
                        <h1 className="sm:text-3xl text-2xl text-center font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Studio Sneak Peek</h1>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-[362px] object-cover h-[217px] object-center block" src="http://artenstudio.com/wp-content/uploads/2021/05/DSC03991-scaled.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-[362px] object-cover h-[217px] object-center block" src="http://artenstudio.com/wp-content/uploads/2021/05/DSC03988-scaled.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-[740px] h-[445.3px] object-cover object-center block" src="http://artenstudio.com/wp-content/uploads/2021/05/DSC03985-scaled.jpg" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-[740px] h-[445.3px] object-cover object-center block" src="http://artenstudio.com/wp-content/uploads/2021/05/DSC04004-scaled.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-[362px] object-cover h-[217px] object-center block" src="http://artenstudio.com/wp-content/uploads/2021/05/DSC03997-scaled.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-[362px] object-cover h-[217px] object-center block" src="http://artenstudio.com/wp-content/uploads/2021/05/DSC03999-scaled.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='h-[800px]'>
                {/* <div className='container px-5 py-20 mx-auto flex justify-center'>
                    <ImageSlider slides={SliderData} />
                </div> */}
                <div className="flex w-full items-center justify-center mb-20">
                    <h1 className="sm:text-3xl text-2xl text-center font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Arten Videos</h1>
                </div>
                <div className='flex justify-center mx-auto'>
                    <VideoSlider videos={VideoData} />
                </div>
            </div>
        </div>
    )
}

export default HomeBody
