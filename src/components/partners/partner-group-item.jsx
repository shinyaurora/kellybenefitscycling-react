import clsx from "clsx";

const PartnerGroup = ({ title, partnerList, size }) => {
    return (
        <div className="my-8">
            <h2 className="text-lg italic mb-4 text-[#6A6A6A]">{title}</h2>
            <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
                {
                    partnerList.map((item, idx) => {
                        return (
                            <div className={
                                clsx(
                                    
                                    idx === 0 ? 'flex justify-start' : idx === partnerList.length - 1 ? 'flex justify-end' : 'flex justify-center'
                                )
                            }>
                                <img src={item.img} className={`${size === "large" ? "w-72" : size === "normal" ? "w-28" : "w-20"}`} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PartnerGroup;