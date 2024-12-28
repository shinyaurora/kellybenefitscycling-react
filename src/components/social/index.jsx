import { Fragment } from "react"

import SliderImage1 from "../../assets/images/slider/slider-1.png";
import SliderImage2 from "../../assets/images/slider/slider-2.png";
import SliderImage3 from "../../assets/images/slider/slider-3.png";
import SliderImage4 from "../../assets/images/slider/slider-4.png";
import SliderImage5 from "../../assets/images/slider/slider-5.png";
import SliderImage6 from "../../assets/images/slider/slider-6.png";
import SliderImage7 from "../../assets/images/slider/slider-7.png";
import SliderImage8 from "../../assets/images/slider/slider-8.png";
import SliderImage9 from "../../assets/images/slider/slider-9.png";

const Social = () => {

    const imageList = [
        {
            img: SliderImage1
        },
        {
            img: SliderImage2
        },
        {
            img: SliderImage3
        },
        {
            img: SliderImage4
        },
        {
            img: SliderImage5
        },
        {
            img: SliderImage6
        },
        {
            img: SliderImage7
        },
        {
            img: SliderImage8
        },
        {
            img: SliderImage9
        },
    ]

    return (
        <Fragment>
            <div className="mx-auto w-full max-w-screen-xl p-4">
                <h1 className="text-3xl font-black text-center my-4">Social Wall</h1>
            </div>
            <div className="bg-[#E4E4E4] py-16 overflow-hidden">
                <div className="w-full inline-flex flex-nowrap group">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll group-hover:animation-paused">
                        {
                            imageList.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <img src={item.img} className="w-80" />
                                    </li>

                                )
                            })
                        }
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll group-hover:animation-paused" aria-hidden="true">
                        {
                            imageList.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <img src={item.img} className="w-80" />
                                    </li>

                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        </Fragment>
    )
}

export default Social;