// src/App.js

// import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/skills",
        element: <Skills />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
]);

function App() {
    return (
        <RouterProvider router={router}>
            <Navbar />
        </RouterProvider>
    );
}

export default App;
