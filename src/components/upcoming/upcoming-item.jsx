const UpcomingItem = ({ title, period, markImage, thumbnailImage, id }) => {
    return (
        <div className="shadow-xl group bg-white hover:bg-primary transition-all duration-200">
            <div className="w-full h-52 relative">
                <img src={thumbnailImage} className="object-cover w-full h-full" />
                <div className="absolute w-full h-full group-hover:bg-white/30 flex items-center justify-center top-0">
                    <img src={markImage} className={`group-hover:scale-150 ${id === 1 ? 'h-8' : 'w-16'}`} />
                </div>
            </div>
            <div className="px-4 py-4 flex flex-col gap-1 bg-white group-hover:bg-primary transition-all duration-200">
                <h1 className="text-lg font-black text-primary group-hover:text-white transition-all duration-200">{title}</h1>
                <span className="text-sm font-semibold group-hover:text-white transition-all duration-200">{period}</span>
            </div>
        </div>
    )
}

export default UpcomingItem