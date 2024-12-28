const UpcomingItem = ({ title, period, markImage, thumbnailImage }) => {
    return (
        <div className="shadow-xl group">
            <div className="w-full h-52 relative">
                <img src={thumbnailImage} className="object-cover" />
                <div className="absolute w-full h-full group-hover:bg-white/30 flex items-center justify-center">
                    <img src={markImage} className="w-auto h-auto group-hover:scale-150" />
                </div>
            </div>
            <div className="px-4 py-6 flex flex-col gap-4 bg-white group-hover:bg-primary transition-all duration-200">
                <h1 className="text-lg font-black text-primary group-hover:text-white transition-all duration-200">{title}</h1>
                <span className="text-sm font-semibold group-hover:text-white transition-all duration-200">{period}</span>
            </div>
        </div>
    )
}

export default UpcomingItem