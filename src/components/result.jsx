import ResultBack from "../assets/images/BEwin-1-2-1.png"
import Prize from "../assets/images/Groupdd.png"
import Vector from "../assets/images/Vector.png"

const Result = () => {
    return (
        <div className="w-full relative">
            <img src={ResultBack} className="object-cover w-full h-full" />
            <div className="absolute left-1/2 top-1/2 tranform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center top-0 cursor-pointer group hover:bg-white transition-all duration-200 rounded-lg px-9 py-5">
                <img src={Prize} className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                <h2 className="font-sans text-[31px] font-bold text-white mx-9 group-hover:text-primary">Results & Calendar</h2>
                <img src={Vector} className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-200" />
            </div>
        </div>
    )

}

export default Result;
