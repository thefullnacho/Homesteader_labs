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
        <div className="max-w-4xl mx-auto p-4 md:p-8 relative z-10 text-theme-main">
            <div className="mb-8 border-l-4 border-theme-main pl-4 py-2">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-theme-main">Archive<br />_Log</h1>
                <p className="text-xs mt-2 max-w-lg text-theme-sub uppercase">
                // Accessing Homesteader Labs Public Research Terminal<br />
                // All entries immutable
                </p>
            </div>
            <div className="space-y-12">
                {posts.map((post, idx) => (
                    <div key={post.slug} className="group relative">
                        <div className="absolute -left-3 top-0 bottom-0 w-[1px] bg-theme-main opacity-20 group-hover:opacity-100 transition-opacity"></div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-stone-900 text-white text-[10px] px-1">{post.slug}</span>
                            <span className="text-[10px] text-theme-sub">{post.date}</span>
                        </div>
                        <h3 className="font-bold text-xl mb-3 uppercase decoration-theme-main/30 underline decoration-1 underline-offset-4 text-theme-main">{post.title}</h3>
                        <div className="text-sm text-theme-main/90 leading-relaxed mb-4 max-w-2xl border-l-2 border-theme-main/10 pl-4 py-1 group-hover:border-theme-main/40 transition-colors">
                            {mdxSources[post.slug] ? (
                                <MDXRemote {...mdxSources[post.slug]} components={components} />
                            ) : (
                                <div className="animate-pulse">PROCESSING...</div>
                            )}
                        </div>
                        <div className="flex gap-2">
                            {post.tags?.map(tag => (
                                <span key={tag} className="text-[10px] text-theme-sub uppercase border border-theme-main/20 px-1 rounded-sm hover:border-theme-main hover:text-theme-main cursor-default">#{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArchiveView;
