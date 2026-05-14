import Navbar from "../components/Navbar";

function Home() {
    return (
        <div className="min-h-screen bg-[#020617] text-white">

            <Navbar />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">

                <div>
                    <p className="text-cyan-400 text-lg mb-4">
                        Hello, I'm
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Pragya Mishra
                    </h1>

                    <p className="text-gray-400 mt-6 text-lg leading-8">
                        Frontend Developer passionate about building
                        beautiful, responsive and modern web applications
                        using React and Tailwind CSS.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                            Hire Me
                        </button>

                        <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition">
                            View Work
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex justify-center">
                    <div className="w-80 h-80 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center text-7xl">
                        👩‍💻
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="max-w-7xl mx-auto px-6 pb-20">

                <h2 className="text-4xl font-bold mb-10 text-center">
                    Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-400 transition">
                        <h3 className="text-2xl font-semibold mb-4">
                            React JS
                        </h3>

                        <p className="text-gray-400">
                            Building modern single-page applications
                            with reusable components.
                        </p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-400 transition">
                        <h3 className="text-2xl font-semibold mb-4">
                            Tailwind CSS
                        </h3>

                        <p className="text-gray-400">
                            Creating responsive and modern UI designs
                            with utility-first CSS.
                        </p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-400 transition">
                        <h3 className="text-2xl font-semibold mb-4">
                            JavaScript
                        </h3>

                        <p className="text-gray-400">
                            Writing clean and interactive frontend logic
                            for web applications.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Home;