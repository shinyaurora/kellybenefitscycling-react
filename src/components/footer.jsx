import FooterImg from "../assets/images/image-1.png"
import AppImg from "../assets/images/AccountsPRO-Logo-Workspace-5-2-1-1.png"

const Footer = () => {
    return (
        <div className="footer h-52 relative justify-content-between">
            <img src={FooterImg} className="absolute top-1/3 mx-10 flex items-center"/>

            <img src={AppImg} className="absolute right-0 top-1/3 mx-10 flex items-center h-24"/>
        </div>
    )
}

export default Footer