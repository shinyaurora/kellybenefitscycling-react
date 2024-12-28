import HeroImage from "../assets/images/hero.webp";

const Hero = () => {
    return (
        <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
            
        </div>
    )
}

export default Hero;