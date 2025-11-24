import { Trophy, Users, Star, Link as LinkIcon } from "lucide-react";
import { client } from "../../../sanity/lib/client";
import { projectsQuery } from "../../../sanity/lib/queries";

// Force static generation
export const dynamic = "force-static";

export default async function PortfolioPage() {
    let projects = [];
    try {
        projects = await client.fetch(projectsQuery);
    } catch (error) {
        console.warn("Failed to fetch projects:", error);
    }

    return (
        <div className="min-h-screen bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-blue-400">Extracurricular Spike</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Leadership & Impact
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Showcasing activities that demonstrate passion, commitment, and tangible results.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <div className="grid grid-cols-1 gap-8">
                        {projects.length > 0 ? (
                            projects.map((project: any) => (
                                <div key={project._id} className="flex flex-col md:flex-row gap-6 bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all">
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-blue-400`}>
                                        <Star className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                            {project.title}
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                                    <LinkIcon className="w-4 h-4" />
                                                </a>
                                            )}
                                        </h3>
                                        <p className="text-sm font-medium text-blue-400 mt-1">{project.role}</p>
                                        <p className="mt-4 text-gray-400 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 bg-zinc-900/30 rounded-2xl border border-dashed border-zinc-800">
                                <p className="text-gray-400">No projects found. Add your first project in the Studio!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
