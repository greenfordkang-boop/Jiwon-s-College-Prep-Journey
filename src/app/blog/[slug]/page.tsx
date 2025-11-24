import { client } from "../../../../sanity/lib/client";
import { postQuery, postsQuery } from "../../../../sanity/lib/queries";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Tag } from "lucide-react";

// Force static generation
export const dynamic = "force-static";

// Required for static export
export async function generateStaticParams() {
    return [{ slug: 'welcome-to-my-blog' }];
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    let post = null;
    try {
        post = await client.fetch(postQuery, { slug: params.slug });
    } catch (error) {
        console.error("Failed to fetch post:", error);
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-black py-24 sm:py-32 flex items-center justify-center">
                <h1 className="text-2xl text-white">Post not found (or CMS not connected)</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black py-24 sm:py-32">
            <article className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <div className="flex items-center justify-center gap-x-4 text-xs mb-4">
                        <time dateTime={post.publishedAt} className="text-gray-500">
                            {new Date(post.publishedAt).toLocaleDateString()}
                        </time>
                        {post.categories && post.categories.map((category: string) => (
                            <span key={category} className="relative z-10 rounded-full bg-blue-400/10 px-3 py-1.5 font-medium text-blue-400 flex items-center gap-1">
                                <Tag className="w-3 h-3" /> {category}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                        {post.title}
                    </h1>
                    {post.author && (
                        <div className="flex items-center justify-center gap-3">
                            {post.author.image && (
                                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                    <Image
                                        src={urlForImage(post.author.image).url()}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <div className="text-left">
                                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                            </div>
                        </div>
                    )}
                </div>

                {post.mainImage && (
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 border border-zinc-800">
                        <Image
                            src={urlForImage(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                <div className="prose prose-invert prose-lg max-w-none">
                    <PortableText value={post.body} />
                </div>
            </article>
        </div>
    );
}
