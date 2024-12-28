import ResultBack from "../assets/images/BEwin-1-2-1.png"

const Result = () => {
    return (
        <div className="w-full d-flex position-relative">
            <img src={ResultBack} className="" />
            <div className="w-full position-absolute top-50">
                <div className="d-flex  justify-content-center text-black">
                    <h2> Results & Calendar</h2>
                </div>    
            </div>
        </div>
    )

}

export default Result;
