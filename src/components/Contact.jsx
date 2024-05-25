// import React from "react";
import image from "../assets/IMG.jpg";

const Contact = () => {
    return (
        <>
            {/* Header */}
            <header className="w-dvw absolute top-0 left-1/2 -translate-x-1/2 z-[1000] py-4">
                <div className="max-w-[120rem] text-gray-50 px-6 md:px-8 lg:px-10">
                    <nav className="w-full flex flex-row items-center font-sans">
                        <a className="text-gray-50" href="/">
                            <svg
                                className="h-8 w-8"
                                viewBox="0 0 512 512"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x={94}
                                    y={81}
                                    width={40}
                                    height={350}
                                    fill="currentColor"
                                />
                                <rect
                                    x={264}
                                    y={81}
                                    width={40}
                                    height={350}
                                    fill="currentColor"
                                />
                                <circle
                                    cx={199}
                                    cy={131}
                                    r={50}
                                    fill="currentColor"
                                />
                                <circle
                                    cx={199}
                                    cy={246}
                                    r={50}
                                    fill="currentColor"
                                />
                                <circle
                                    cx={369}
                                    cy={131}
                                    r={50}
                                    fill="currentColor"
                                />
                                <circle
                                    cx={369}
                                    cy={246}
                                    r={50}
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <div className="flex-1 relative hidden md:flex items-center justify-center">
                            <ul className="mx-auto inline-flex gap-20 text-sm font-light">
                                <li>
                                    <a
                                        className="font-bold relative after:h-px after:content-[''] after:w-full after:absolute after:top-full after:bg-accent-500 after:left-0 after:translate-y-1 uppercase"
                                        href="/"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="font-bold relative after:h-px after:content-[''] after:w-full after:absolute after:top-full after:bg-accent-500 after:left-0 after:translate-y-1 uppercase"
                                        href="/skills"
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="font-bold relative after:h-px after:content-[''] after:w-full after:absolute after:top-full after:bg-accent-500 after:left-0 after:translate-y-1 uppercase"
                                        href="/projects"
                                    >
                                        Portofolio
                                    </a>
                                </li>
                            </ul>
                            <ul className="absolute right-0">
                                <li className="relative">
                                    <a
                                        className=" h-10 rounded-lg flex items-center justify-center text-base bg-accent-500 leading-none px-12 uppercase"
                                        href="/about"
                                    >
                                        About Me
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Contact */}
            <div className="flex justify-center items-center h-screen bg-black">
                <div className="bg-emerald-950 rounded-lg shadow-md p-5 text-white text-center">
                    <img
                        className="w-32 h-40 rounded-full mx-auto"
                        src={image}
                        alt="Profile picture"
                    />
                    <h2 className="text-2xl font-semibold mt-3">
                        Yehezkiel Tatang
                    </h2>
                    <p className="text-gray-400 mt-1">Full-stack Programmer</p>
                    <div className="flex justify-center mt-5 space-x-6">
                        <a
                            href="tel:+6285765736145"
                            className="text-blue-500 hover:text-blue-400"
                        >
                            +6285765736145
                        </a>
                        <a
                            href="mailto:yehezkieltatang1@gmail.com"
                            className="text-blue-500 hover:text-blue-400"
                        >
                            yehezkieltatang1@gmail.com
                        </a>
                        <a
                            href="https://linkedin.com/in/yehezkiel-tatang"
                            className="text-blue-500 hover:text-blue-400"
                        >
                            LinkedIn/yehezkiel-tatang
                        </a>
                        <a
                            href="https://github.com/yehezkielt"
                            className="text-blue-500 hover:text-blue-400"
                        >
                            GitHub/yehezkielt
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
