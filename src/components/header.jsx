import clsx from "clsx";
import Logo from "../assets/images/logo.png";

const Header = () => {

    const navUrls = [
        {
            title: "home",
            url: ""
        },
        {
            title: "Team",
            url: ""
        },
        {
            title: "Result",
            url: ""
        },
        {
            title: "Media",
            url: ""
        },
        {
            title: "Club",
            url: ""
        },
        {
            title: "Partner",
            url: ""
        },
        {
            title: "Contact",
            url: ""
        }
    ]

    return (
        <div className="absolute top-0 py-8 px-8 md:px-12 xl:px-16 flex items-center justify-between w-full">
            <img src={Logo} className="" />
            <div className="flex items-center gap-4 lg:gap-8 xl:gap-16">
                {
                    navUrls.map((item, idx) => {
                        return (
                            <a className={clsx("text-white text-md hover:text-primary")} href={item.url}>
                                {item}
                            </a>
                        )
                    })
            }
            </div>
        </div>
    )
}

export default Header;