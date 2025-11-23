import React from 'react';
import { ShieldCheck, Target, Heart, Zap } from 'lucide-react';
import { AFFILIATE_LINK } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Mission</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We exist to help men break free from digital addiction and reclaim their natural drive, confidence, and relationships.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg prose-slate mx-auto">
          <p>
            Porn addiction is often suffered in silence. The shame associated with it prevents many men from seeking help. At ClearPath Recovery, we believe that addiction is not a moral failing—it is a neurochemical condition that can be treated with the right tools and mindset.
          </p>
          <p>
            Our content is grounded in the latest neuroscience regarding dopamine regulation, habit formation, and cognitive behavioral therapy (CBT).
          </p>
          
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-8 text-center">Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
            <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm">
              <Target className="h-8 w-8 text-brand-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Science Over Shame</h3>
              <p className="text-slate-600">We don't preach. We explain the biology of what is happening in your brain so you can fix it.</p>
            </div>
            <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm">
              <Heart className="h-8 w-8 text-red-500 mb-3" />
              <h3 className="text-xl font-bold mb-2">Real Connection</h3>
              <p className="text-slate-600">We prioritize real-world relationships and intimacy over pixels and screens.</p>
            </div>
            <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm">
              <ShieldCheck className="h-8 w-8 text-green-500 mb-3" />
              <h3 className="text-xl font-bold mb-2">Radical Accountability</h3>
              <p className="text-slate-600">Ownership is the first step to freedom. We provide the tools to keep you honest.</p>
            </div>
            <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm">
              <Zap className="h-8 w-8 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold mb-2">Actionable Strategy</h3>
              <p className="text-slate-600">Theory is useless without action. Every article contains steps you can take today.</p>
            </div>
          </div>

          <h2 className="mt-12">Why We Recommend Quittr</h2>
          <p>
            While there are many tools out there, we have partnered with <strong>Quittr</strong> because it combines streak tracking, journaling, and community in a way that feels modern and supportive, not clinical or judgmental.
          </p>
          <p>
            Recovery is a marathon, not a sprint. But every marathon is run one step at a time.
          </p>

          <div className="mt-12 text-center">
            <a 
              href={AFFILIATE_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-brand-600 text-white font-bold rounded-xl shadow-lg hover:bg-brand-700 transition-colors"
            >
              Start Your Journey Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;