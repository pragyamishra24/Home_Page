import { Link } from "react-router-dom";
import { projects } from "../data/projectsData";

function Projects() {
    return (
        <div className="min-h-screen bg-[#0b1326] text-white overflow-x-hidden">

            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 border-b border-cyan-500/10 bg-[#0b1326]/70 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    <h1 className="text-2xl font-extrabold tracking-wider text-cyan-400">
                        DEV_CORE
                    </h1>

                    <div className="hidden md:flex items-center gap-8 text-sm">

                        <Link
                            to="/"
                            className="text-slate-300 hover:text-cyan-400 transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/projects"
                            className="text-cyan-400 font-semibold"
                        >
                            Projects
                        </Link>

                        <Link
                            to="/contact"
                            className="text-slate-300 hover:text-cyan-400 transition"
                        >
                            Contact
                        </Link>

                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-40 pb-16 px-6 relative">

                <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

                <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

                <div className="relative max-w-7xl mx-auto">

                    <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
                        PORTFOLIO
                    </p>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                        My
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            {" "}
                            Projects
                        </span>
                    </h1>

                    <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
                        A collection of modern web applications, scalable backend systems,
                        AI-powered tools, and futuristic UI experiences built with
                        performance-focused engineering.
                    </p>

                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-6 pb-24">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, index) => (

                        <div
                            key={index}
                            className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400/40 hover:-translate-y-2 transition duration-300"
                        >

                            {/* Top Area */}
                            <div className="h-52 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">

                                <h2 className="text-3xl font-extrabold text-cyan-300 opacity-80 text-center px-4">
                                    {project.title}
                                </h2>

                            </div>

                            {/* Content */}
                            <div className="p-6">

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">

                                    {project.tech.map((item, i) => (

                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300"
                                        >
                                            {item}
                                        </span>

                                    ))}

                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-3">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {project.desc}
                                </p>

                                {/* Buttons */}
                                <div className="flex items-center gap-4">

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
                                    >
                                        Live Demo
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-3 rounded-xl border border-white/10 hover:border-cyan-400/40 text-slate-300 transition"
                                    >
                                        GitHub
                                    </a>

                                </div>

                            </div>
                        </div>

                    ))}

                </div>
            </section>

            {/* CTA */}
            <section className="px-6 pb-24">

                <div className="max-w-7xl mx-auto bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-3xl p-12 text-center">

                    <h2 className="text-4xl font-bold mb-4">
                        Want to collaborate?
                    </h2>

                    <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                        I’m available for freelance projects, remote roles, and innovative collaborations.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-block px-10 py-4 bg-cyan-400 text-black font-bold rounded-xl hover:scale-105 transition"
                    >
                        Contact Me
                    </Link>

                </div>
            </section>

        </div>
    );
}

export default Projects;