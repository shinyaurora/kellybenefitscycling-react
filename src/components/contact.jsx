import ContactBack from "../assets/images/image-15-2.png"

const Contact = () => {
    return (
        <div className="w-full relative">
            <img src={ContactBack} className="object-cover w-full h-full" />
            <div className="absolute left-1/2 top-1/2 tranform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center top-0 cursor-pointer group ">
                <div className="absolute left-1/2 top-1/2 tranform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center top-0 opacity-0 border-solid border-white border-2 px-40 py-7 transition-all duration-200 group-hover:opacity-100"></div>
                <h2 className="font-sans text-[31px] font-bold text-white mx-9">Contact Us Today</h2>
            </div>
        </div>
    )

}

export default Contact;
