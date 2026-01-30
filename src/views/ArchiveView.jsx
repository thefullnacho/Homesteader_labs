import React, { useState, useEffect } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import ServerStatusLight from '../components/mdx/ServerStatusLight';

const ArchiveView = ({ posts }) => {
    const [mdxSources, setMdxSources] = useState({});

    // Process MDX content on component mount
    useEffect(() => {
        const processPosts = async () => {
            const sources = {};
            for (const post of posts) {
                try {
                    sources[post.slug] = await serialize(post.content);
                } catch (error) {
                    console.error(`Error serializing MDX for ${post.slug}:`, error);
                    sources[post.slug] = null;
                }
            }
            setMdxSources(sources);
        };

        if (posts.length > 0) {
            processPosts();
        }
    }, [posts]);

    const components = {
        ServerStatusLight,
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 relative z-10">
            <div className="mb-8 border-l-4 border-stone-900 pl-4 py-2">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Archive<br />_Log</h1>
                <p className="text-xs mt-2 max-w-lg text-stone-500 uppercase">
                // Accessing Homesteader Labs Public Research Terminal<br />
                // All entries immutable
                </p>
            </div>
            <div className="space-y-12">
                {posts.map((post, idx) => (
                    <div key={post.slug} className="group relative">
                        <div className="absolute -left-3 top-0 bottom-0 w-[1px] bg-stone-300 group-hover:bg-stone-900 transition-colors"></div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-stone-900 text-white text-[10px] px-1">{post.slug}</span>
                            <span className="text-[10px] text-stone-500">{post.date}</span>
                        </div>
                        <h3 className="font-bold text-xl mb-3 uppercase decoration-stone-400 underline decoration-1 underline-offset-4">{post.title}</h3>
                        <div className="text-sm text-stone-800 leading-relaxed mb-4 max-w-2xl border-l-2 border-stone-200 pl-4 py-1 group-hover:border-stone-500 transition-colors">
                            {mdxSources[post.slug] ? (
                                <MDXRemote {...mdxSources[post.slug]} components={components} />
                            ) : (
                                <div className="animate-pulse">PROCESSING...</div>
                            )}
                        </div>
                        <div className="flex gap-2">
                            {post.tags?.map(tag => (
                                <span key={tag} className="text-[10px] text-stone-400 uppercase border border-stone-200 px-1 rounded-sm hover:border-stone-900 hover:text-stone-900 cursor-default">#{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArchiveView;
