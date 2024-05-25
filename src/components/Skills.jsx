// src/components/Skills.js

// import React from "react";

const Skills = () => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <div>
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
                <section className="h-dvh w-dvw max-h-[80rem] relative">
                    <div className="absolute inset-0 z-[1]">
                        <img
                            className="h-full w-full object-cover object-center"
                            src="https://img.freepik.com/free-photo/matrix-hacker-background_23-2150082007.jpg?t=st=1716654361~exp=1716657961~hmac=767511a1e063482ac291b3eaafc837d539fbf688222496ebedf008624f57ed68&w=740"
                            alt=""
                        />
                    </div>
                    <div className="max-w-[120rem] mx-auto h-full relative z-[2] px-6 md:px-8 lg:px-10">
                        <div className="h-full w-full flex flex-col relative space-y-6">
                            <div className="mt-auto mb-0 text-gray-50 md:pb-36 space-y-6">
                                <h1 className="text-3xl md:text-5xl max-w-[30rem] ml-4 font-medium">
                                    Skills
                                </h1>
                                <div className="max-w-[30rem] font-light ml-4 before:content-[''] relative before:absolute before:w-px before:h-full before:left-0 before:top-0 before:-translate-x-4 before:bg-accent-500 md:text-base text-sm">
                                    <h2 className="text-2xl font-semibold">
                                        Language
                                    </h2>
                                    <p>JavaScript</p>
                                    <h2 className="text-2xl font-semibold mt-4">
                                        Front End
                                    </h2>
                                    <p>
                                        React JS, Redux, Vue, Pinia, React
                                        Native, HTML & CSS, Apollo Client, Next
                                        JS, Typescript
                                    </p>
                                    <h2 className="text-2xl font-semibold mt-4">
                                        Back End
                                    </h2>
                                    <p>
                                        Node JS, Express, Sequelize, PostgreSQL,
                                        GraphQL, Apollo Server, MongoDB, Redis,
                                        Rest API, Next JS
                                    </p>
                                </div>
                                <div className="md:flex-row flex-col flex gap-4 ml-4">
                                    <button className="inline-block text-base font-medium px-12 py-2 border border-accent-400 rounded-lg text-accent-400 cursor-pointer bg-gray-50/10 backdrop-blur-3xl uppercase">
                                        Contact me
                                    </button>
                                </div>
                            </div>
                            <div className="md:absolute md:right-0 md:bottom-32 text-gray-50 my-16">
                                <ul className="flex md:flex-col items-center justify-center gap-2">
                                    <li className="h-6 w-6 block rounded-full bg-accent-400 text-gray-50">
                                        <a
                                            href=""
                                            className="block h-full w-full p-1"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-full h-full fill-current "
                                                viewBox="0 0 24 24"
                                            >
                                                <g
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                >
                                                    <path d="M0 0h24v24H0z" />
                                                    <path
                                                        fill="currentColor"
                                                        d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112l-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2z"
                                                    />
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="h-6 w-6 block rounded-full bg-accent-400 text-gray-50">
                                        <a
                                            href=""
                                            className="h-full w-full block p-1"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                className="w-full h-full fill-current "
                                            >
                                                <path d="M256.283 47.553c70.693 0 128 54.682 118 128.931-2.072 15.388-3.422 31.483-4.26 44.759 0 0 2.402 4.253 12.664 4.253 6.071 0 14.895-1.543 27.596-6.354 2.236-.847 4.377-1.241 6.377-1.241 7.918 0 13.615 5.931 14.123 12.271.426 5.31-4.564 11.199-8.371 13.009-13.766 6.542-46.991 10.063-46.991 32.638 0 22.576 22.362 46.656 40.862 63.713S480 360.602 480 360.602s.283 21.57-31.717 29.097c-32 7.524-32.1 5.712-33.25 13.796-2.133 14.979-1.535 21.378-11.248 21.378-1.672 0-3.651-.19-6.002-.558-8.23-1.291-19.239-3.644-31.121-3.644-11.216 0-23.21 2.097-34.379 9.161-23.731 14.952-43.54 23.145-71.283 23.145-39.354 0-78.462-14.625-100.139-18.693-13.316-2.519-34.999-7.549-49.29-15.998-2.769-1.679-8.769-4.769-8.769-14.769 0-10 6-16 20-16 25 0 58 20 122 20 19.375 0 25.999-2.928 25.999-11.999 0-11.084-5.88-11.572-16.825-18.286-16.485-9.901-47.141-30.857-47.141-87.482 0-67.763 31.09-109.725 76.562-120.974-5.213-20.708-7.592-49.4-1.614-80.579 18.717-94.003 107.723-94.003 130.44-94.003zM0 255.761c.282-1.978 0-3.956 0-5.934 0-141.385 114.751-256 256-256 1.978 0 3.956-.283 5.934 0C121.172.565 0 121.699 0 255.761z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="h-6 w-6 block rounded-full bg-accent-400 text-gray-50">
                                        <a
                                            href=""
                                            className="h-full w-full block p-1"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-full h-full fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <g
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                >
                                                    <path d="M0 0h24v24H0z" />
                                                    <path
                                                        fill="currentColor"
                                                        d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112l-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2z"
                                                    />
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Skills;
