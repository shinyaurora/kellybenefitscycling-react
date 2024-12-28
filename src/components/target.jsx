import TargetImage from "../assets/images/target.png";

const Target = () => {
    return (
        <div className="container mx-auto px-8 lg:px-12 xl:px-16 py-8">
            <img src={TargetImage} className="w-full h-auto" />
        </div>
    )   
}

export default Target;