import Link from "next/link";
import { Tag } from "lucide-react";
import { client } from "../../../sanity/lib/client";
import { postsQuery } from "../../../sanity/lib/queries";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";

// Force static generation
export const dynamic = "force-static";

export default async function BlogPage() {
    let posts = [];
    try {
        posts = await client.fetch(postsQuery);
    } catch (error) {
        console.warn("Failed to fetch posts:", error);
    }

    return (
        <div className="min-h-screen bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-blue-400">Knowledge Hub</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Insights & Resources
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Sharing the journey, study strategies, and resources for fellow international school students.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl grid gap-8 lg:max-w-none lg:grid-cols-3">
                    {posts.length > 0 ? (
                        posts.map((post: any) => (
                            <article key={post._id} className="flex flex-col items-start justify-between bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-colors group">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.publishedAt} className="text-gray-500">
                                        {new Date(post.publishedAt).toLocaleDateString()}
                                    </time>
                                    {post.categories && post.categories.map((category: string) => (
                                        <span key={category} className="relative z-10 rounded-full bg-blue-400/10 px-3 py-1.5 font-medium text-blue-400 hover:bg-blue-400/20 transition-colors flex items-center gap-1">
                                            <Tag className="w-3 h-3" /> {category}
                                        </span>
                                    ))}
                                </div>
                                <div className="group relative w-full">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors">
                                        <Link href={`/blog/${post.slug.current}`}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </Link>
                                    </h3>
                                    {post.mainImage && (
                                        <div className="relative w-full h-48 mt-4 rounded-lg overflow-hidden">
                                            <Image
                                                src={urlForImage(post.mainImage).url()}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-white">
                                            <span className="absolute inset-0" />
                                            {post.author}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="col-span-3 text-center py-12 bg-zinc-900/30 rounded-2xl border border-dashed border-zinc-800">
                            <p className="text-gray-400">No posts found. Log in to the Studio to create your first post!</p>
                            <Link href="/studio" className="mt-4 inline-block text-blue-400 hover:underline">Go to Studio &rarr;</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
