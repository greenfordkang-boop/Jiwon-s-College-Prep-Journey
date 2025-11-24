"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const roadmapData = [
    {
        grade: "Grade 9",
        title: "Foundation & Exploration",
        status: "current",
        items: [
            "Maintain GPA 4.0 (Top Priority)",
            "Join 2-3 School Clubs (Exploration)",
            "Launch 'Project Jiwon' Blog",
            "Explore Majors via Coursera/EdX",
        ],
    },
    {
        grade: "Grade 10",
        title: "Deep Dive & Leadership",
        status: "upcoming",
        items: [
            "Select AP/Honors Tracks",
            "Focus on 1-2 Key Activities (Leadership)",
            "Publish In-depth Blog Content",
            "SAT/ACT Diagnostic Test",
        ],
    },
    {
        grade: "Grade 11",
        title: "Peak Performance",
        status: "upcoming",
        items: [
            "Max Rigor Course Load (AP)",
            "Standardized Testing (SAT/ACT)",
            "Create Tangible Impact in Clubs",
            "Draft Common App Essays",
        ],
    },
    {
        grade: "Grade 12",
        title: "Final Polish & Application",
        status: "upcoming",
        items: [
            "Finalize GPA & AP Scores",
            "Complete Activity List",
            "Submit College Applications",
            "Alumni Interviews",
        ],
    },
];

export default function RoadmapPage() {
    return (
        <div className="min-h-screen bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-blue-400">The Master Plan</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        4-Year Strategic Roadmap
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        A structured approach to building internal capacity and achieving academic excellence.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="relative border-l border-gray-800 ml-4 md:ml-0 space-y-12">
                        {roadmapData.map((year, index) => (
                            <motion.div
                                key={year.grade}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline Dot */}
                                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-black border-2 border-blue-500" />

                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                            {year.grade}
                                            {year.status === "current" && (
                                                <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30">
                                                    Current
                                                </span>
                                            )}
                                        </h3>
                                        <p className="text-lg font-semibold text-blue-400 mt-1">{year.title}</p>
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {year.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                                            {year.status === "completed" ? (
                                                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            ) : year.status === "current" ? (
                                                <Clock className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                            ) : (
                                                <Circle className="h-5 w-5 text-gray-600 flex-shrink-0" />
                                            )}
                                            <span className="text-gray-300 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
