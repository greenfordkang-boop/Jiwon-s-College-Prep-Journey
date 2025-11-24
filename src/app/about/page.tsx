import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-blue-400">About Me</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Jiwon
                        </p>
                        <p className="mt-4 text-xl text-gray-300">
                            Grade 9 Student at SJA Jeju
                        </p>
                        <div className="mt-8 space-y-6 text-gray-400 leading-relaxed">
                            <p>
                                Hello! I'm Jiwon, a high school student with a passion for technology and self-directed learning.
                                Currently attending St. Johnsbury Academy Jeju, I am embarking on a 4-year journey to maximize my potential
                                and achieve admission to a top-tier US university.
                            </p>
                            <p>
                                My philosophy is centered on "Internal Capacity" — the belief that true academic strength comes from
                                genuine curiosity and the ability to learn independently, rather than relying on expensive external help.
                            </p>
                            <p>
                                Through this platform, I aim to document my growth, share valuable resources with my peers, and demonstrate
                                that with the right strategy and determination, anything is possible.
                            </p>
                        </div>

                        <div className="mt-10 border-t border-zinc-800 pt-8">
                            <h3 className="text-lg font-semibold text-white mb-4">Core Values</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["Intellectual Vitality", "Leadership", "Community Impact", "Resilience"].map((value) => (
                                    <li key={value} className="flex items-center gap-2 text-gray-300">
                                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                                        {value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                        {/* Placeholder for profile image */}
                        <div className="text-center p-8">
                            <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-4xl">👩‍🎓</span>
                            </div>
                            <p className="text-gray-500 text-sm">Profile Image Placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
