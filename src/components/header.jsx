import clsx from "clsx";
import Logo from "../assets/images/logo.png";

const Header = () => {

    const navUrls = [
        {
            title: "Home",
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
        <div className="absolute top-0 py-4 px-8 md:px-12 xl:px-16 flex items-center justify-between w-full">
            <img src={Logo} className="w-14" />
            <div className="items-center gap-8 xl:gap-16 hidden md:flex">
                {
                    navUrls.map((item, idx) => {
                        return (
                            <a key={idx} className={clsx("text-white text-md font-semibold hover:text-primary")} href={item.url}>
                                {item.title}
                            </a>
                        )
                    })
            }
            </div>
            <div className="block md:hidden w-8 h-8 text-white cursor-pointer hover:text-primary">
                <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                </svg>
            </div>
        </div>
    )
}

export default Header;