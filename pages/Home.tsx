import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield, Users } from 'lucide-react';
import { AFFILIATE_LINK, AFFILIATE_CTA_TEXT } from '../constants';
import { blogPosts } from '../data/blogPosts';

const Home: React.FC = () => {
  // Get 3 featured posts
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Reclaim Your Brain.<br />
            <span className="text-brand-600">Break the Cycle.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10">
            Porn addiction is silent, but its effects are loud. Join thousands of men using science-backed tools to recover their focus, energy, and relationships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white font-bold rounded-xl shadow-lg hover:bg-brand-700 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center space-x-2"
            >
              <Smartphone className="h-5 w-5" />
              <span>Download Quittr App</span>
            </a>
            <Link 
              to="/blog"
              className="w-full sm:w-auto px-8 py-4 bg-white text-brand-600 font-bold rounded-xl border-2 border-brand-100 hover:border-brand-300 hover:bg-brand-50 transition-all flex items-center justify-center space-x-2"
            >
              <span>Read The Guides</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Why Willpower Isn't Enough</h2>
            <p className="mt-4 text-lg text-slate-600">You need a system. Here is what works.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-md transition-shadow">
              <Zap className="h-10 w-10 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Dopamine Reset</h3>
              <p className="text-slate-600">Understand the neuroscience of addiction to hack your reward system back to baseline.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-brand-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Support</h3>
              <p className="text-slate-600">Isolation feeds addiction. Connection kills it. Find your tribe and stay accountable.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-md transition-shadow">
              <Shield className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Streak Tracking</h3>
              <p className="text-slate-600">Visualize your progress. A growing number is a powerful psychological anchor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Latest Recovery Insights</h2>
              <p className="mt-2 text-slate-600">Read our most popular guides.</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center text-brand-600 font-semibold hover:text-brand-700">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs font-bold text-brand-600 uppercase tracking-wide bg-brand-50 px-2 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                  <span className="text-sm font-semibold text-slate-900 flex items-center">
                    Read Article <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/blog" className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-700">
              View all articles <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="py-24 bg-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-800 opacity-50 pattern-grid-lg"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to stop counting days and start making days count?</h2>
          <p className="text-xl text-brand-100 mb-10">Join thousands of men who have successfully quit porn using the Quittr framework.</p>
          <a 
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-white text-brand-900 font-bold text-lg rounded-xl hover:bg-brand-50 transition-colors shadow-2xl"
          >
            {AFFILIATE_CTA_TEXT}
          </a>
          <p className="mt-4 text-sm text-brand-200">Available on iOS</p>
        </div>
      </section>
    </div>
  );
};

export default Home;