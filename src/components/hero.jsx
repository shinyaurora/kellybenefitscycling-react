import HeroImage from "../assets/images/hero.webp";

const Hero = () => {
    return (
        <div className="w-full h-screen bg-cover" style={{ backgroundImage: `url(${HeroImage})` }}>
            
        </div>
    )
}

export default Hero;