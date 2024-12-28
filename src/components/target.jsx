import TargetImage from "../assets/images/target.png";

const Target = () => {
    return (
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8" >
            <div className="px-4 lg:px-32 pt-8">
                <img src={TargetImage} className="w-full h-auto" />
            </div>
        </div >
    )
}

export default Target;