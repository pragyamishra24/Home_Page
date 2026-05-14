import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const navLink = (path) =>
        location.pathname === path
            ? "text-cyan-300 border-b-2 border-cyan-300 pb-1 font-bold"
            : "text-slate-300 hover:text-cyan-300 transition";

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0b1326]/70 backdrop-blur-xl border-b border-slate-700/30">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <Link
                    to="/"
                    className="text-2xl font-extrabold tracking-tight text-cyan-300"
                >
                    DEV_CORE
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className={navLink("/")}>
                        Home
                    </Link>

                    <Link to="/projects" className={navLink("/projects")}>
                        Projects
                    </Link>

                    <Link to="/contact" className={navLink("/contact")}>
                        Contact
                    </Link>
                </div>

                <button className="bg-cyan-300 text-black px-5 py-2 rounded-lg font-bold hover:scale-95 transition">
                    Resume
                </button>
            </div>
        </nav>
    );
}

export default Navbar;