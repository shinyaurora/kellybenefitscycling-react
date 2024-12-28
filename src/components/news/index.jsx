import NewsImage1 from "../../assets/images/news-1.png"
import NewsImage2 from "../../assets/images/news-2.png"
import NewsImage3 from "../../assets/images/news-3.png"
import NewsImage4 from "../../assets/images/news-4.png"
import NewsImage5 from "../../assets/images/news-5.png"

import { Fragment } from "react";
import NewsItem from "./news-item";

const News = () => {
    const newsData = [
        {
            title: "News",
            period: "February 14 - 16, 2025",
            thumbnailImage: NewsImage1,
            description: "Artem Shmidt Former KBS Rider Makes It World Tour",
            id: 1
        },
        {
            title: "Tour of Southern Highlands",
            period: "March 4 - 6, 2025",
            thumbnailImage: NewsImage2,
            description: "Competing Alongside Mark Cavendish At Las Vegas's StadioBike.",
            id: 2
        },
        {
            title: "Joe Martin Stage Race",
            period: "May 18 - May 21, 2025",
            thumbnailImage: NewsImage3,
            description: "KBS Rolls out New Partnership With Cannondale.",
            id: 3
        },
        {
            title: "Joe Martin Stage Race",
            period: "May 18 - May 21, 2025",
            thumbnailImage: NewsImage4,
            description: "Three Challenging Stage Races In Spain After Belgian Kermesses.",
            id: 4
        },
        {
            title: "Joe Martin Stage Race",
            period: "May 18 - May 21, 2025",
            thumbnailImage: NewsImage5,
            description: "Former KBS Rider Completing 43 UCI Race Days!",
            id: 5
        }
    ]


    return (
        <Fragment>
            <div className="mx-auto w-full max-w-screen-xl p-4">
                <h1 className="text-3xl font-black text-center mt-16">Upcoming Races</h1>
            </div>
            <div className="bg-[white] pt-8 pb-16">
                <div className="mx-auto w-full max-w-screen-xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
                        {
                            newsData.map((item, idx) => {
                                return (
                                    <NewsItem {...item} key={idx} />
                                )
                            })
                        }
                        <div className="flex items-center justify-center w-full">
                            <div className="bg-primary hover:bg-primary/40 hover:transform hover:scale-110 shadow-2xl rounded text-white transition-all duration-200 cursor-pointer font-black text-2xl px-14 py-2">
                                View All
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default News;