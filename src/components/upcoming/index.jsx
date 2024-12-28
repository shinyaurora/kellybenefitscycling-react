import ThumbnailImage1 from "../../assets/images/thumb-1.png"
import ThumbnailImage2 from "../../assets/images/thumb-2.png"
import ThumbnailImage3 from "../../assets/images/thumb-3.png"

import MarkImage1 from "../../assets/images/mark-1.png";
import MarkImage2 from "../../assets/images/mark-2.png";
import MarkImage3 from "../../assets/images/mark-3.png";
import { Fragment } from "react";
import UpcomingItem from "./upcoming-item";

const Upcoming = () => {
    const upcomingData = [
        {
            title: "Valley of The Sun SR",
            period: "February 14 - 16, 2025",
            thumbnailImage: ThumbnailImage1,
            markImage: MarkImage1,
            id: 1
        },
        {
            title: "Tour of Southern Highlands",
            period: "March 4 - 6, 2025",
            thumbnailImage: ThumbnailImage2,
            markImage: MarkImage2,
            id: 2
        },
        {
            title: "Joe Martin Stage Race",
            period: "May 18 - May 21, 2025",
            thumbnailImage: ThumbnailImage3,
            markImage: MarkImage3,
            id: 3
        }
    ]


    return (
        <Fragment>
            <div className="mx-auto w-full max-w-screen-xl p-4">
                <h1 className="text-3xl font-black text-center my-4">Upcoming Races</h1>
            </div>
            <div className="bg-[#E4E4E4] py-16">
                <div className="mx-auto w-full max-w-screen-xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
                    {
                        upcomingData.map((item, idx) => {
                            return (
                                <UpcomingItem {...item} key={idx} />
                            )
                        })
                    }
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Upcoming;