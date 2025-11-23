import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft, Clock, Calendar, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { AFFILIATE_LINK } from '../constants';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Related posts logic (simple same category suggestion)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* Article Header */}
      <div className="w-full h-64 md:h-[500px] relative">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-20">
          <div className="max-w-4xl px-4 text-center text-white animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <span className="px-4 py-1.5 bg-brand-500 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider shadow-lg">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-sm md:text-base text-slate-200 font-medium">
               <span className="flex items-center"><Calendar className="h-5 w-5 mr-2 text-brand-400"/> {post.date}</span>
               <span className="flex items-center"><Clock className="h-5 w-5 mr-2 text-brand-400"/> {post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-brand-600 mb-8 transition-colors font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Articles
          </Link>

          <article className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline max-w-none prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-10">
            {/* We render HTML dangerously, assuming the source is our trusted internal data */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Inline CTA */}
          <div className="mt-16 p-8 md:p-12 bg-gradient-to-br from-brand-50 to-white rounded-3xl border border-brand-100 text-center shadow-lg">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Don't Recover Alone</h3>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">Join thousands of men tracking their journey, identifying triggers, and supporting each other on the path to freedom.</p>
            <a 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-brand-600 text-white text-lg font-bold rounded-xl shadow-md hover:bg-brand-700 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Get The Quittr App
            </a>
            <p className="mt-4 text-xs text-slate-400 uppercase tracking-wide">Available on iOS</p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-500 text-sm mb-4 font-semibold uppercase tracking-wide">Share this article</p>
            <div className="flex space-x-4">
              <button className="p-3 bg-slate-50 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-100"><Facebook className="h-5 w-5"/></button>
              <button className="p-3 bg-slate-50 rounded-full hover:bg-sky-50 hover:text-sky-500 transition-colors border border-slate-100"><Twitter className="h-5 w-5"/></button>
              <button className="p-3 bg-slate-50 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors border border-slate-100"><Linkedin className="h-5 w-5"/></button>
              <button className="p-3 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors border border-slate-100"><Share2 className="h-5 w-5"/></button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-8">
           {/* Author Widget */}
           <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sticky top-24">
             <div className="flex items-center space-x-4 mb-6">
               <div className="h-14 w-14 bg-brand-100 rounded-full flex items-center justify-center text-2xl border-2 border-brand-200">👨‍💻</div>
               <div>
                 <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Written by</p>
                 <p className="font-bold text-slate-900 text-lg">{post.author}</p>
               </div>
             </div>
             <hr className="border-slate-100 mb-6" />
             
             <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg text-center">
                <h4 className="font-bold text-xl mb-2">Serious about quitting?</h4>
                <p className="text-slate-300 text-sm mb-6">Download the #1 rated recovery companion app.</p>
                <a 
                  href={AFFILIATE_LINK} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-brand-500 hover:bg-brand-400 text-white py-3 rounded-lg font-bold transition-all shadow-md hover:shadow-lg"
                >
                  Download Now
                </a>
             </div>
           </div>

           {/* Related Posts */}
           {relatedPosts.length > 0 && (
             <div className="pt-8 lg:pt-0">
               <h4 className="font-bold text-slate-900 mb-6 text-xl">Related Articles</h4>
               <div className="space-y-6">
                 {relatedPosts.map(rp => (
                   <Link key={rp.id} to={`/blog/${rp.slug}`} className="flex space-x-4 group bg-slate-50 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                     <img src={rp.imageUrl} alt={rp.title} className="w-24 h-24 object-cover rounded-lg shadow-sm" />
                     <div className="flex flex-col justify-center">
                       <span className="text-[10px] uppercase font-bold text-brand-600 mb-1">{rp.category}</span>
                       <h5 className="font-bold text-slate-800 text-sm leading-tight group-hover:text-brand-600 mb-2">{rp.title}</h5>
                       <p className="text-xs text-slate-500 flex items-center"><Clock className="h-3 w-3 mr-1"/> {rp.readTime}</p>
                     </div>
                   </Link>
                 ))}
               </div>
             </div>
           )}
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;
