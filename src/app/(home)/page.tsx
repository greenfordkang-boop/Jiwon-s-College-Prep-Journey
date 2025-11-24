import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jiwon's College Prep Platform",
    description: "A strategic 4-year journey to top-tier universities.",
};

export const dynamic = "force-static";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />

            {/* Mission Section */}
            <section className="py-24 bg-zinc-900/50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-blue-400">The Strategy</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Internal Capacity & Unique Spike
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            This platform documents the journey of maximizing internal potential without relying on expensive private tutoring.
                            It serves as a living portfolio of academic excellence, leadership, and community contribution.
                        </p>
                    </div>
                </div>
            </section>

            {/* Recent Updates Placeholder */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12">Latest Updates</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="rounded-2xl bg-zinc-900 p-8 border border-zinc-800 hover:border-zinc-700 transition-colors">
                                <div className="text-sm text-gray-500 mb-4">November 24, 2025</div>
                                <h3 className="text-xl font-semibold text-white mb-2">Project Kickoff: The Beginning</h3>
                                <p className="text-gray-400">
                                    Setting up the digital infrastructure for the next 4 years of growth and achievement.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
