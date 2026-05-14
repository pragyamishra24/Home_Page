function Footer() {
    return (
        <footer className="border-t border-slate-700/30 py-10 mt-20 bg-[#060e20]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-5">
                <div>
                    <h2 className="font-bold text-cyan-300">DEV_CORE</h2>
                    <p className="text-slate-400 text-sm mt-2">
                        © 2026 All Rights Reserved
                    </p>
                </div>

                <div className="flex gap-6 text-slate-400">
                    <a href="#" className="hover:text-cyan-300 transition">
                        GitHub
                    </a>

                    <a href="#" className="hover:text-cyan-300 transition">
                        LinkedIn
                    </a>

                    <a href="#" className="hover:text-cyan-300 transition">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;