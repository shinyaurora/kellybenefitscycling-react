const NewsItem = ({ title, period, thumbnailImage, description }) => {
    return (
        <div className="shadow-xl group bg-white cursor-pointer">
            <div className="w-full h-52 relative">
                <img src={thumbnailImage} className="object-cover w-full h-full" />
                <div className="absolute w-full h-full flex items-center justify-center top-0">
                    <span className="text-2xl font-bold text-white">Read More</span>
                </div>
            </div>
            <div className="px-4 py-4 flex flex-col gap-1 bg-white">
                <h1 className="text-lg font-black text-primary">{title}</h1>
                <span className="text-sm font-semibold">{period}</span>
                <p className="mt-2 text-sm">{ description }</p>
            </div>
        </div>
    )
}

export default NewsItem