import { Link } from "react-router-dom";

function Contact() {
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
                            className="text-slate-300 hover:text-cyan-400 transition"
                        >
                            Projects
                        </Link>

                        <Link
                            to="/contact"
                            className="text-cyan-400 font-semibold"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Background Glow */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

            {/* Main Section */}
            <section className="relative pt-40 pb-24 px-6">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Content */}
                    <div>

                        <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
                            CONTACT
                        </p>

                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                            Let’s
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                {" "}
                                Connect
                            </span>
                        </h1>

                        <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
                            Whether it’s a freelance project, remote opportunity,
                            startup collaboration, or futuristic product idea —
                            I’m always excited to build something impactful.
                        </p>

                        {/* Contact Cards */}
                        <div className="space-y-5">

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl hover:border-cyan-400/40 transition">
                                <p className="text-cyan-300 text-sm mb-1">
                                    Email
                                </p>

                                <h3 className="text-lg font-semibold">
                                    pragya@example.com
                                </h3>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl hover:border-cyan-400/40 transition">
                                <p className="text-cyan-300 text-sm mb-1">
                                    Location
                                </p>

                                <h3 className="text-lg font-semibold">
                                    Rajasthan, India
                                </h3>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl hover:border-cyan-400/40 transition">
                                <p className="text-cyan-300 text-sm mb-1">
                                    Availability
                                </p>

                                <h3 className="text-lg font-semibold">
                                    Open for Freelance & Remote Work
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

                        <h2 className="text-3xl font-bold mb-8">
                            Send Message
                        </h2>

                        <form className="space-y-6">

                            {/* Name */}
                            <div>
                                <label className="block text-sm text-slate-400 mb-2">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-5 py-4 rounded-xl bg-[#111827] border border-white/10 focus:border-cyan-400 outline-none text-white"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm text-slate-400 mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-5 py-4 rounded-xl bg-[#111827] border border-white/10 focus:border-cyan-400 outline-none text-white"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm text-slate-400 mb-2">
                                    Message
                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Tell me about your project..."
                                    className="w-full px-5 py-4 rounded-xl bg-[#111827] border border-white/10 focus:border-cyan-400 outline-none text-white resize-none"
                                ></textarea>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold hover:scale-[1.02] transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-10 px-6">

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                    <h2 className="text-cyan-400 font-bold tracking-widest">
                        DEV_CORE
                    </h2>

                    <div className="flex items-center gap-6 text-slate-400 text-sm">

                        <a href="#" className="hover:text-cyan-400 transition">
                            GitHub
                        </a>

                        <a href="#" className="hover:text-cyan-400 transition">
                            LinkedIn
                        </a>

                        <a href="#" className="hover:text-cyan-400 transition">
                            Twitter
                        </a>
                    </div>

                    <p className="text-slate-500 text-sm">
                        © 2026 DEV_CORE. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Contact;