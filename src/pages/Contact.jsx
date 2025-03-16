import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Contact() {
    const form = useRef();
    const sendForm = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY
        ).then((result) => {
            console.log("success", result.text);
            alert("Message sent successfully");
        }).catch((error) => {
            console.log("error", error.text);
            alert("Something went wrong");
        });
        e.target.reset();
    };

    return (
        <div className="w-full h-screen flex items-center justify-center font-[Mulish]">
            <div className="flex flex-col lg:flex-row items-center justify-center h-[90vh]">
                {/* Content (Scrollable on Small Screens) */}
                <div className="w-full lg:w-2/3 px-6 lg:px-8 h-screen overflow-y-auto relative custom-scrollbar">
                    {/* Image for Small Screens */}
                    <div className="lg:hidden w-full flex justify-center items-center mb-8">
                        <img src="cont-1.jpg" className="h-64 w-full object-cover" />
                    </div>

                    <h1 className="font-bold text-8xl lg:text-9xl absolute top-15 z-0 opacity-10">
                        CONTACTS
                    </h1>
                    <div className="mb-8 mt-38">
                        <h2 className="font-bold text-2xl">
                            <span className="text-green-500">Get</span> In Touch
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
                            {/* Address */}
                            <div className="rounded-2xl px-4 py-6 bg-gray-700 mt-8">
                                <div className="flex items-center gap-4">
                                    <FaLocationDot className="text-4xl text-green-500" />
                                    <div>
                                        <h3 className="font-bold text-xl">Address</h3>
                                        <span className="text-gray-400 text-sm">
                                            Addis Ababa, Ethiopia
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="rounded-2xl px-4 py-6 bg-gray-700 mt-8">
                                <div className="flex items-center gap-4">
                                    <MdOutlineAlternateEmail className="text-4xl text-green-500" />
                                    <div>
                                        <h3 className="font-bold text-xl">Email</h3>
                                        <span className="text-gray-400 text-sm">
                                            solehadin7853@gmail.com
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="rounded-2xl px-4 py-6 bg-gray-700 mt-8">
                                <div className="flex items-center gap-4">
                                    <LuPhone className="text-4xl text-green-500" />
                                    <div>
                                        <h3 className="font-bold text-xl">Phone</h3>
                                        <span className="text-gray-400 text-sm">+251944287853</span>
                                    </div>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="rounded-2xl px-4 py-6 bg-gray-700 mt-8">
                                <div className="flex items-center gap-4">
                                    <IoLogoLinkedin className="text-4xl text-green-500" />
                                    <div>
                                        <h3 className="font-bold text-xl">LinkedIn</h3>
                                        <span className="text-gray-400 text-sm">
                                            linkedin.com/in/solehadinmohammed
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="mt-20">
                            <h2 className="text-2xl font-bold"><span className="text-green-500">Contact</span> Form</h2>
                            <div className="mt-8 rounded-2xl bg-gray-700 px-6 lg:px-12 py-12">
                                <form ref={form} onSubmit={sendForm}>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-18">
                                        {/* Full Name */}
                                        <div className="flex flex-col mb-8">
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Full Name"
                                                className="border-b border-gray-500 text-white bg-transparent pb-6 focus:outline-none w-full"
                                            />
                                        </div>

                                        {/* Email Address */}
                                        <div className="flex flex-col mb-8">
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="Email Address"
                                                className="border-b border-gray-500 text-white bg-transparent pb-6 focus:outline-none w-full"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="mt-6">
                                        <input
                                            type="text"
                                            name="message"
                                            required
                                            placeholder="Your Message"
                                            className="border-b border-gray-500 text-white bg-transparent pb-12 focus:outline-none w-full"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="mt-8 flex items-center gap-2 font-bold text-md transition-all duration-300 group"
                                    >
                                        Send Message <FaArrowRightLong className="mt-1.5 group-hover:translate-x-2" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image for Larger Screens */}
                <div className="hidden lg:block w-full lg:w-1/2 h-screen">
                    <img src="cont-1.jpg" className="object-cover h-screen w-full" />
                </div>
            </div>
        </div>
    );
}

export default Contact;