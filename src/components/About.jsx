// import React from "react";

const About = () => {
    return (
        <div className="bg-black w-full h-full">
            <header className="w-dvw absolute top-0 left-1/2 -translate-x-1/2 z-[1000] py-4 bg-black">
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
                                        Portfolio
                                    </a>
                                </li>
                            </ul>
                            <ul className="absolute right-0">
                                <li className="relative">
                                    <a
                                        className="h-10 rounded-lg flex items-center justify-center text-base bg-accent-500 leading-none px-12 uppercase"
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
            <section className="mt-10 ">
                <div className="mx-auto px-4 py-8 ml-20 gap-10 text-white flex">
                    {/* Left Content */}
                    <div className="w-1/3 pr-8">
                        <h1 className="text-3xl font-bold mb-4 text-zinc-400">
                            About Me
                        </h1>
                        <p className="text-lg mb-6">
                            Hello! Im Yehezkiel Tatang, a passionate full-stack
                            programmer based in Jakarta, Indonesia. With a
                            strong foundation in web development and mobile
                            applications, I strive to create innovative
                            solutions that make a positive impact.
                        </p>

                        <h2 className="text-2xl font-bold mb-2 text-zinc-400">
                            Summary
                        </h2>
                        <p className="text-lg mb-6">
                            I specialize in both front-end and back-end
                            technologies, including HTML, CSS, JavaScript,
                            React, and Node.js. My journey in programming began
                            at Binus University, where I pursued a Bachelor of
                            Management and Information Systems. To further
                            refine my skills, I undertook an intensive Full
                            Stack JavaScript Immersive Program at Hacktiv8,
                            where I honed my abilities to build robust and
                            scalable web applications.
                        </p>

                        <h2 className="text-2xl font-bold mb-2 text-zinc-400">
                            Education
                        </h2>
                        <p className="text-lg mb-6">
                            <strong>Hacktiv8, Jakarta, Indonesia</strong>
                            <br />
                            Full Stack JavaScript Immersive Program (Transcript)
                            <br />
                            January 2023 – April 2023
                        </p>
                        <p className="text-lg mb-6">
                            <strong>
                                Universitas Bina Nusantara, Jakarta, Indonesia
                            </strong>
                            <br />
                            Bachelor of Management and Information Systems
                            <br />
                            GPA: 3 .5/4.00
                            <br />
                            August 2017 – June 2023
                        </p>
                    </div>

                    {/* Middle Content */}
                    <div className="w-1/3 px-8">
                        <h2 className="text-2xl font-bold mb-2 text-zinc-400">
                            Work Experience
                        </h2>
                        <div className="mb-6">
                            <p className="text-lg">
                                <strong>
                                    Yanti P&D, Bukittinggi, Indonesia
                                </strong>
                                <br />
                                Sales, Driver, Laborer
                                <br />
                                March 2020 - January 2023
                            </p>
                            <ul className="list-disc ml-6">
                                <li>Responsible for sales and cashier </li>
                                <li>Deliver goods for bulk purchases</li>
                                <li>Help unload trucks from factory </li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <p className="text-lg">
                                <strong>Kampus Merdeka, Kemendikbud RI</strong>
                                <br />
                                Data Analysis Intern
                                <br />
                                January 2022 – June 2022
                            </p>
                            <p>
                                participated in an internship program from the
                                government (Kampus Merdeka) and Binus where
                                learning about data analytics is given and data
                                analysis project tasks
                            </p>
                        </div>
                        <div className="mb-6">
                            <p className="text-lg">
                                <strong>
                                    Monalisa Service, Bukittinggi, Indonesia
                                </strong>
                                <br />
                                Mechanic, Driver, Owner
                                <br />
                                February 2012 - August 2017
                            </p>
                            <ul className="list-disc ml-6">
                                <li>
                                    Fix air conditioners, refrigerators, washing
                                    machines, stoves, and other devices
                                </li>
                                <li>
                                    Pick up and drop off goods from the
                                    customers premises
                                </li>
                                <li>Fully responsible for store operations</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-1/3 pl-8">
                        <h2 className="text-2xl font-bold mb-2 text-zinc-400">
                            Certifications
                        </h2>
                        <div className="mb-6">
                            <p className="text-lg">
                                <strong>HackerRank</strong>
                                <br />
                                Basic CSS
                                <br />
                                Issued on May 2024
                                <br />
                                Certificate:{" "}
                                <a
                                    href="https://www.hackerrank.com/certificates/5b305baa1c48"
                                    className="underline"
                                >
                                    View Certificate
                                </a>
                            </p>
                        </div>
                        <div className="mb-6">
                            <p className="text-lg">
                                <strong>HackerRank</strong>
                                <br />
                                Javascript
                                <br />
                                Issued on May 2024
                                <br />
                                Certificate:{" "}
                                <a
                                    href="https://www.hackerrank.com/certificates/bf572547db87"
                                    className="underline"
                                >
                                    View Certificate
                                </a>
                            </p>
                        </div>
                        <div className="mb-6">
                            <p className="text-lg">
                                <strong>HackerRank</strong>
                                <br />
                                Problem Solving
                                <br />
                                Issued on May 2024
                                <br />
                                Certificate:{" "}
                                <a
                                    href="https://www.hackerrank.com/certificates/11e8661b6402"
                                    className="underline"
                                >
                                    View Certificate
                                </a>
                            </p>
                        </div>
                        <div className="mb-6">
                            <p className="text-lg">
                                <strong>HackerRank</strong>
                                <br />
                                React
                                <br />
                                Issued on May 2024
                                <br />
                                Certificate:{" "}
                                <a
                                    href="https://www.hackerrank.com/certificates/86b9ea45b1ac"
                                    className="underline"
                                >
                                    View Certificate
                                </a>
                            </p>
                        </div>
                        <div className="mb-6">
                            <p className="text-lg">
                                <strong>HackerRank</strong>
                                <br />
                                SQL
                                <br />
                                Issued on May 2024
                                <br />
                                Certificate:{" "}
                                <a
                                    href="https://www.hackerrank.com/certificates/980484e1c700"
                                    className="underline"
                                >
                                    View Certificate
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
