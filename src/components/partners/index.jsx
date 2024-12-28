import MainImage1 from "../../assets/images/brand/main-1.png";
import MainImage2 from "../../assets/images/brand/main-2.png";
import MainImage3 from "../../assets/images/brand/main-3.png";

import OfficialImage1 from "../../assets/images/brand/official-1.png";
import OfficialImage2 from "../../assets/images/brand/official-2.png";
import OfficialImage3 from "../../assets/images/brand/official-3.png";
import OfficialImage4 from "../../assets/images/brand/official-4.png";
import OfficialImage5 from "../../assets/images/brand/official-5.png";
import OfficialImage6 from "../../assets/images/brand/official-6.png";

import SupplyImage1 from "../../assets/images/brand/supply-1.png";
import SupplyImage2 from "../../assets/images/brand/supply-2.png";
import SupplyImage3 from "../../assets/images/brand/supply-3.png";
import SupplyImage4 from "../../assets/images/brand/supply-4.png";
import SupplyImage5 from "../../assets/images/brand/supply-5.png";
import SupplyImage6 from "../../assets/images/brand/supply-6.png";
import SupplyImage7 from "../../assets/images/brand/supply-7.png";
import PartnerGroup from "./partner-group-item";

const Partner = () => {

    const mainList = [
        {
            img: MainImage1
        },
        {
            img: MainImage2
        },
        {
            img: MainImage3
        },
    ]

    const officialList = [
        {
            img: OfficialImage1
        },
        {
            img: OfficialImage2
        },
        {
            img: OfficialImage3
        },
        {
            img: OfficialImage4
        },
        {
            img: OfficialImage5
        },
        {
            img: OfficialImage6
        },
    ]

    const supplyList = [
        {
            img: SupplyImage1
        },
        {
            img: SupplyImage2
        },
        {
            img: SupplyImage3
        },
        {
            img: SupplyImage4
        },
        {
            img: SupplyImage5
        },
        {
            img: SupplyImage6
        },
        {
            img: SupplyImage7
        },
    ]

    return (
        <div className="bg-[white] pt-12 pb-16">
            <div className="mx-auto w-full max-w-screen-xl px-4">
                <h1 className="text-3xl font-black text-center my-4">Official Partners</h1>
                <PartnerGroup title="Main Sponsors" partnerList={mainList} size="large" />
                <PartnerGroup title="Official Partners" partnerList={officialList} size="normal" />
                <PartnerGroup title="Suppliers" partnerList={supplyList} size="small" />
            </div>
        </div>
    )
}

export default Partner;