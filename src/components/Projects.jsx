// import React from "react";

const Projects = () => {
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
                <section className="h-dvh w-dvw max-h-[80rem] relative">
                    <div className="absolute inset-0 z-[1]">
                        <img
                            className="h-full w-full object-cover object-center"
                            src="https://img.freepik.com/premium-photo/green-cyber-circuit-future-technology-concept-background_42077-2672.jpg?w=900"
                            alt=""
                        />
                    </div>
                    <div className="max-w-[120rem] mx-auto h-full relative z-[2] px-6 md:px-8 lg:px-10">
                        <div className="h-full w-full flex flex-col relative space-y-6">
                            <div className="mt-auto mb-0 text-gray-50 md:pb-36 space-y-6">
                                <div className="flex flex-wrap justify-between mt-20">
                                    <div className="w-full md:w-1/2 pr-4">
                                        <div className="mt-4">
                                            <a
                                                href="https://github.com/yehezkielt/healthylicious.git"
                                                className="text-2xl font-semibold underline underline-offset-4"
                                            >
                                                Healthylicious
                                            </a>
                                            <p>February 2024</p>
                                            <p>
                                                A web-based e-commerce app using
                                                visual code for online healthy
                                                food catering.
                                            </p>
                                            <p>
                                                Tech stack: ReactJS (with 5
                                                member group)
                                            </p>
                                        </div>
                                        <div className="mt-4">
                                            <a
                                                href="https://github.com/yehezkielt/phase1project.git"
                                                className="text-2xl font-semibold underline underline-offset-4"
                                            >
                                                Medical Record
                                            </a>
                                            <p>March 2024</p>
                                            <p>
                                                A web-based application with a
                                                health technology theme for
                                                managing and processing medical
                                                records of patients.
                                            </p>
                                            <p>
                                                Tech stack: ReactJS, ExpressJS,
                                                Session, Bcrypt, Helmet package,
                                                Sequelize
                                            </p>
                                        </div>
                                        <div className="mt-4">
                                            <a
                                                href="https://github.com/yehezkielt/shoeStores.git"
                                                className="text-2xl font-semibold underline underline-offset-4"
                                            >
                                                ShoeStores
                                            </a>
                                            <p>April 2024</p>
                                            <p>
                                                A web-based application to
                                                display and buy shoes.
                                            </p>
                                            <p>
                                                Tech stack: 3rd party API
                                                data-shoes, Redux, React,
                                                ExpressJS, Google CE server,
                                                PostgreSQL, Midtrans, Google
                                                login, Firebase client
                                            </p>
                                        </div>
                                        <div className="mt-4">
                                            <a
                                                href="https://github.com/uzushiogakure/"
                                                className="text-2xl font-semibold underline underline-offset-4"
                                            >
                                                Group Chat
                                            </a>
                                            <p>April 2024</p>
                                            <p>
                                                A web-based application for
                                                group chatting.
                                            </p>
                                            <p>
                                                Tech stack: Socket.io, Redux,
                                                React, ExpressJS, Google CE
                                                Server, PostgreSQL, Firebase
                                                client
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 pl-4">
                                        <div className="mt-4">
                                            <a
                                                href="https://github.com/yehezkielt/tumblr"
                                                className="text-2xl font-semibold underline underline-offset-4"
                                            >
                                                Tumblr
                                            </a>
                                            <p>May 2024</p>
                                            <p>
                                                A mobile application for social
                                                media.
                                            </p>
                                            <p>
                                                Tech stack: GraphQL, React
                                                Native, Apollo Server, Apollo
                                                Client, MongoDB, Google CE
                                            </p>
                                        </div>
                                        <div className="mt-4">
                                            <a
                                                href="https://github.com/yehezkielt/levis"
                                                className="text-2xl font-semibold underline underline-offset-4"
                                            >
                                                Levis
                                            </a>
                                            <p>May 2024</p>
                                            <p>
                                                A web-based application for
                                                eCommerce selling Levis
                                                products.
                                            </p>
                                            <p>
                                                Tech stack: NextJS, Typescript,
                                                MongoDB, Vercel
                                            </p>
                                        </div>
                                        <div className="mt-4">
                                            <a className="text-2xl font-semibold">
                                                Story Tales
                                            </a>
                                            <p>May 2024</p>
                                            <p>
                                                A mobile application with OpenAI
                                                generate for making stories,
                                                playing sounds, and creating
                                                images.
                                            </p>
                                            <p>
                                                Tech stack: GraphQL, React
                                                Native, MongoDB, AWS Server,
                                                OpenAI, Midtrans
                                            </p>
                                            <p>
                                                Link Repositories:{" "}
                                                <a
                                                    href="https://github.com/storytales-project"
                                                    className="text-accent-400 underline underline-offset-4"
                                                >
                                                    [link]
                                                </a>
                                            </p>
                                            <p>
                                                Link Deploy:{" "}
                                                <a
                                                    href="https://expo.dev/preview/update?message=playstory&updateRuntimeVersion=1.0.0&createdAt=2024-05-23T08%3A32%3A46.020Z&slug=exp&projectId=86014d7b-cf2e-4af6-a3e1-d19d52072e9f&group=da5c46a1-138a-42cd-b42d-38d6217259aa"
                                                    className="text-accent-400 underline underline-offset-4"
                                                >
                                                    [link]
                                                </a>
                                            </p>
                                        </div>
                                    </div>
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

export default Projects;
