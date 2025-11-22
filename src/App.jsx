import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  BarChart3, 
  Users, 
  Zap, 
  Layers, 
  Target, 
  Linkedin, 
  Mail, 
  ChevronDown,
  Award,
  Brain,
  Globe,
  Code,
  Search,
  Lightbulb,
  TrendingUp,
  BookOpen,
  CheckCircle2,
  ArrowUpRight,
  DollarSign,
  Rocket
} from 'lucide-react';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  
  // --- Logique pour l'effet de lumière (Version "Aurora" restaurée) ---
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Animation fluide de la lumière (inertie)
  useEffect(() => {
    const animateGlow = () => {
      setGlowPosition(prev => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        return {
          x: prev.x + dx * 0.1,
          y: prev.y + dy * 0.1
        };
      });
      requestRef.current = requestAnimationFrame(animateGlow);
    };
    requestRef.current = requestAnimationFrame(animateGlow);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePosition]);
  // -------------------------------------------------

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Configuration des couleurs pour chaque projet
  const accentStyles = {
    indigo: {
      bg: 'bg-indigo-600',
      gradient: 'from-indigo-500 to-blue-500',
      shadow: 'shadow-[0_0_30px_rgba(99,102,241,0.3)]',
      border: 'border-indigo-500',
      text: 'text-indigo-300',
      bar: 'bg-indigo-500'
    },
    teal: {
      bg: 'bg-teal-600',
      gradient: 'from-teal-500 to-emerald-500',
      shadow: 'shadow-[0_0_30px_rgba(45,212,191,0.3)]',
      border: 'border-teal-500',
      text: 'text-teal-300',
      bar: 'bg-teal-500'
    },
    rose: {
      bg: 'bg-rose-600',
      gradient: 'from-rose-500 to-orange-500',
      shadow: 'shadow-[0_0_30px_rgba(244,63,94,0.3)]',
      border: 'border-rose-500',
      text: 'text-rose-300',
      bar: 'bg-rose-500'
    }
  };

  const caseStudies = [
    {
      title: "Launch of a new product",
      role: "0 to 1", 
      tags: ["Product Strategy", "AI", "B2B", "GTM"],
      context: "Objective (KR): Create a new product generating €250k revenue in year one to reignite growth.",
      problem: [
        "Paradigm shift in recruitment: A massive imbalance where some companies are overwhelmed with applications while others receive zero.",
        "We identified a 'visibility gap' for unknown companies and specific roles that needed proactive sourcing."
      ],
      discovery: [
        "Met with 20+ recruiters (Chanel, BPI, Wavestone) to perfectly frame the problem and find a solution.",
      ],
      solution: "AI-Powered Sourcing solution that proactively identifies and matches the best talent from our 2M+ database to specific open roles.",
      impact: [
        { metric: "€100k", label: "Signed Pre-launch" },
        { metric: "€400k", label: "Forecast (vs 250k)" },
      ],
      icon: <Rocket className="text-white" size={24} />,
      accent: "rose"
    },
    {
      title: "Application funnel optimization",
      role: "Optimization", 
      tags: ["Data analyse", "UX Research", "Algolia", "Technical migration"],
      context: "Objective (KR): Increase the total volume of applications by 20% to mitigate B2B churn risk.",
      problem: [
        "Clients complain about a lower volume of applications compared to the competition.",
      ],
      discovery: [
        "Quantitative analysis: 80% of searches are done solely via filters (without keywords), creating results that are too restrictive (20% of searches yield <10 results).",
        "Qualitative Research: Validation that the UX encourages the over-use of filters and that the existing keyword engine is not very relevant. The hypothesis regarding a lack of info on offers was invalidated.",
        "Conclusion: Users needed a 'broad-to-narrow' search flow, not a restrictive one."
      ],
      solution: "Complete UX Revamp ('Progressive Search') encouraging broad initial queries + Technical migration to Algolia for instant relevance.",
      impact: [
        { metric: "+30%", label: "Total Applications" },
        { metric: "+12%", label: "UX Impact Alone" },
        { metric: "100%", label: "Algolia Migration" }
      ],
      icon: <Search className="text-white" size={24} />,
      accent: "indigo"
    },
    {
      title: "Increase engagement with a new product",
      role: "0 to 1", 
      tags: ["Discovery", "Engagement", "GTM"],
      context: "Objective (KR): Increase the number of active engineering students on the platform by 30%.",
      problem: [
        "Low presence in the engineering segment, especially among juniors (1st/2nd year) looking for very short 'blue-collar internships'. These offers are not profitable for companies and are therefore absent from the platform."
      ],
      discovery: [
        "Qualitative interviews revealed a surprising behavior: User Behavior: Students consult physical binders in the school library to find internship histories of alumni (opportunities for them).",
        "Data Opportunity: JobTeaser already possessed this data via user profiles (past experiences filled in) but was not exploiting it."
      ],
      solution: "Digitization of the 'binder': Creation of a peer-to-peer Experience review module to drive engagement without relying on job inventory.",
      impact: [
        { metric: "+20%", label: "Engineer students engagement (Y1)" },
        { metric: "80k+", label: "Reviews Published" },
        { metric: "40+", label: "Schools launched" }
      ],
      icon: <Users className="text-white" size={24} />,
      accent: "teal"
    }
  ];

  const currentStyle = accentStyles[caseStudies[activeCaseStudy].accent];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-x-hidden">
      
      {/* --- BACKGROUND INTERACTIF (Version Aurora) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0B0F19]"></div>
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
          }}
        ></div>
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.07), transparent 40%)`
          }}
        ></div>
        <div 
          className="absolute inset-0 transition-opacity duration-75"
          style={{
            background: `
              radial-gradient(500px circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(45, 212, 191, 0.06), transparent 40%),
              radial-gradient(400px circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(168, 85, 247, 0.04), transparent 30%)
            `
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0F19] opacity-80"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-[#0B0F19]/80 backdrop-blur-xl border-slate-800/50 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-xl font-bold tracking-tighter text-white cursor-pointer hover:text-slate-200 transition-colors relative group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Arnaud Girard<span className="text-indigo-500 group-hover:text-teal-400 transition-colors">.</span>
          </div>
          <div className="hidden md:flex items-center space-x-1 bg-slate-900/50 p-1 rounded-full border border-slate-800/50 backdrop-blur-sm">
            {['Philosophy', 'Case Studies', 'Experience'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                className="px-4 py-1.5 rounded-full text-xs font-medium hover:bg-slate-800 hover:text-white transition-all text-slate-400"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => window.open('mailto:arnaud7.girard@hotmail.fr')}
            className="bg-white text-black hover:bg-slate-200 px-5 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2"
          >
            <Mail size={16} /> Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for Senior / Lead Roles
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Product Strategy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-300 animate-gradient-x">
                backed by Data.
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed border-l-2 border-slate-800 pl-6">
              Senior Product Manager specialized in B2B SaaS & Marketplaces. 
              I transform user insights into measurable business growth levers.
            </p>
            
            {/* BOUTONS FIXÉS POUR MOBILE */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollTo('case-studies')}
                className="w-full sm:w-auto justify-center group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_4px_20px_rgba(79,70,229,0.3)] flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                View Case Studies 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/arnaud-girard-64393110a/?locale=en_US', '_blank')}
                className="w-full sm:w-auto justify-center px-8 py-4 rounded-xl font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all border border-slate-800 flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <Linkedin size={18} /> LinkedIn Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Stats */}
      <section className="py-12 border-y border-slate-800/50 bg-slate-900/20 z-10 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { val: "+250K", label: "Revenue", sub: "with a new product", icon: <DollarSign size={20} className="text-green-400"/> },
              { val: "+30%", label: "Applications", sub: "via Search Revamp", icon: <TrendingUp size={20} className="text-green-400"/> },
              { val: "80k+", label: "Content Pieces", sub: "User Generated Content", icon: <Users size={20} className="text-blue-400"/> },
              { val: "32%", label: "Activation Rate", sub: "vs 15% (Onboarding)", icon: <Zap size={20} className="text-yellow-400"/> },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 bg-[#0F1421] rounded-xl border border-slate-800 hover:border-slate-700 transition-colors group relative overflow-hidden hover:-translate-y-1 duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="p-2 bg-slate-900 rounded-lg text-slate-400 group-hover:text-white transition-colors shadow-inner">
                    {stat.icon}
                  </div>
                  <ArrowUpRight size={16} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
                </div>
                <div className="text-3xl font-bold text-white mb-1 relative z-10">{stat.val}</div>
                <div className="text-sm font-medium text-slate-300 relative z-10">{stat.label}</div>
                <div className="text-xs text-slate-500 mt-1 relative z-10">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - ESPACEMENT MOBILE RÉDUIT */}
      <section id="philosophy" className="py-16 lg:py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-bold text-white mb-6">Product Philosophy</h2>
              <p className="text-slate-400 leading-relaxed">
                My methodology is pragmatic. I don't seek theoretical perfection, but measurable impact. I constantly navigate between macro vision (strategy) and micro details (execution).
              </p>
            </div>
            <div className="md:w-2/3 grid gap-8">
              {/* ... Philosophy Items ... */}
              <div className="flex gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="mt-1">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                    <Target className="text-indigo-400" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Outcome over Output</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Shipping features isn't enough. I measure success by business indicators (Revenue, Retention, Activation). If a feature doesn't move the needle, it must be iterated or killed.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="mt-1">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center border border-teal-500/20 group-hover:border-teal-500/50 transition-colors shadow-[0_0_15px_rgba(45,212,191,0.2)]">
                    <BarChart3 className="text-teal-400" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Data-Informed, Intuition-Guided</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Data tells us "what", user research tells us "why". I use SQL and quantitative analysis to detect opportunities, and qualitative insights to design the solution.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="mt-1">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center border border-pink-500/20 group-hover:border-pink-500/50 transition-colors shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                    <Users className="text-pink-400" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Radical Collaboration</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The PM is not the "CEO of the product". I facilitate collective intelligence. The best ideas often come from engineers or customer support, not always the PM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - ESPACEMENT MOBILE RÉDUIT */}
      <section id="case-studies" className="py-16 lg:py-32 bg-slate-900/30 border-y border-slate-800/50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Deep Dives</h2>
            <p className="text-slate-400">Detailed exploration of complex problems solved.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar Menu */}
            <div className="lg:col-span-4 space-y-3">
              {caseStudies.map((study, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCaseStudy(index)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
                    activeCaseStudy === index 
                      ? `bg-[#161b2c] ${currentStyle.border} shadow-lg shadow-indigo-900/10` 
                      : 'bg-[#0F1421] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {activeCaseStudy === index && (
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${currentStyle.bar} h-full`}></div>
                  )}
                  <div className="flex justify-between items-start mb-2 pl-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${
                      activeCaseStudy === index ? `${currentStyle.border.replace('border', 'bg')}/10 ${currentStyle.text} ${currentStyle.border}/20` : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>
                      {study.role}
                    </span>
                    {activeCaseStudy === index && <ArrowRight size={14} className={currentStyle.text.replace('text-', 'text-').replace('-300', '-400')} />}
                  </div>
                  <h3 className={`font-bold text-lg pl-2 ${activeCaseStudy === index ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {study.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <div className="h-full bg-[#0F1421] border border-slate-800 rounded-2xl overflow-hidden relative shadow-2xl">
                {/* Top Bar Decoration */}
                <div className={`h-1 w-full bg-gradient-to-r ${currentStyle.gradient}`}></div>
                
                <div className="p-8 lg:p-10">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {caseStudies[activeCaseStudy].tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-start gap-6 mb-10">
                    {/* ICONE MASQUÉE SUR MOBILE */}
                    <div className={`hidden sm:block p-4 rounded-2xl ${currentStyle.bg} ${currentStyle.shadow}`}>
                      {caseStudies[activeCaseStudy].icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{caseStudies[activeCaseStudy].title}</h3>
                      <p className="text-slate-400">{caseStudies[activeCaseStudy].context}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-4">
                       <div className="flex items-center gap-2 text-slate-200 font-bold text-sm uppercase tracking-wide">
                          <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                          The Problem
                       </div>
                       {/* Rendu conditionnel : Liste de paragraphes ou texte simple */}
                       <div className="border-l border-slate-800 pl-4">
                         {Array.isArray(caseStudies[activeCaseStudy].problem) ? (
                           caseStudies[activeCaseStudy].problem.map((p, i) => (
                             <p key={i} className="text-slate-400 text-sm leading-relaxed mb-3 last:mb-0">
                               {p}
                             </p>
                           ))
                         ) : (
                           <p className="text-slate-400 text-sm leading-relaxed">
                             {caseStudies[activeCaseStudy].problem}
                           </p>
                         )}
                       </div>
                    </div>
                    <div className="space-y-4">
                       <div className="flex items-center gap-2 text-slate-200 font-bold text-sm uppercase tracking-wide">
                          <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                          The Discovery
                       </div>
                       {/* Rendu conditionnel : Liste de paragraphes ou texte simple */}
                       <div className="border-l border-slate-800 pl-4">
                         {Array.isArray(caseStudies[activeCaseStudy].discovery) ? (
                           caseStudies[activeCaseStudy].discovery.map((p, i) => (
                             <p key={i} className="text-slate-400 text-sm leading-relaxed mb-3 last:mb-0">
                               {p}
                             </p>
                           ))
                         ) : (
                           <p className="text-slate-400 text-sm leading-relaxed">
                             {caseStudies[activeCaseStudy].discovery}
                           </p>
                         )}
                       </div>
                    </div>
                  </div>

                  <div className="bg-[#161b2c] rounded-xl p-6 border border-slate-800 mb-8 relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-1 h-full ${currentStyle.bar}`}></div>
                    <div className={`flex items-center gap-2 ${currentStyle.text} font-bold text-sm uppercase tracking-wide mb-3`}>
                        <Lightbulb size={16} /> The Solution
                    </div>
                    <p className="text-slate-300">{caseStudies[activeCaseStudy].solution}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-green-400 font-bold text-sm uppercase tracking-wide mb-6">
                        <TrendingUp size={16} /> Business Impact
                    </div>
                    {/* GRID IMPACT FIXÉ POUR MOBILE */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {caseStudies[activeCaseStudy].impact.map((item, i) => (
                        <div key={i} className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-slate-600 transition-colors">
                          <div className="text-2xl font-bold text-white mb-1">{item.metric}</div>
                          <div className="text-[10px] uppercase tracking-wider text-slate-500">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Experience - ESPACEMENT MOBILE RÉDUIT */}
      <section id="experience" className="py-16 lg:py-32 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Experience</h2>
          
          <div className="space-y-0">
            {/* Item 1 */}
            <div className="flex group">
              <div className="flex flex-col items-center mr-8">
                <div className="w-3 h-3 rounded-full bg-indigo-500 border-4 border-[#0B0F19] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10"></div>
                <div className="w-px h-full bg-slate-800 group-hover:bg-slate-700"></div>
              </div>
              <div className="pb-12 pt-1">
                 <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">Senior Product Manager</h3>
                    <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">Apr 2025 - Present</span>
                 </div>
                 <div className="text-slate-400 mb-4 font-medium">JobTeaser (B2B)</div>
                 <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                   Spearheading the creation of a "Zero-to-One" product to diversify revenue streams. Defining Go-to-Market strategy and orchestrating the recruitment of the first beta testers.
                 </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex group">
              <div className="flex flex-col items-center mr-8">
                <div className="w-3 h-3 rounded-full bg-slate-600 border-4 border-[#0B0F19] group-hover:bg-indigo-400 group-hover:scale-150 transition-all duration-300 z-10"></div>
                <div className="w-px h-full bg-slate-800 group-hover:bg-slate-700"></div>
              </div>
              <div className="pb-12 pt-1">
                 <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">Product Manager</h3>
                    <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">2022 - 2025</span>
                 </div>
                 <div className="text-slate-400 mb-4 font-medium">JobTeaser (B2C & Engagement)</div>
                 <ul className="space-y-2 text-sm text-slate-500">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="mt-0.5 text-green-500 shrink-0"/>
                      <span><strong className="text-slate-300">Search Revamp:</strong> +30% applications via Algolia migration.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="mt-0.5 text-green-500 shrink-0"/>
                      <span><strong className="text-slate-300">Community:</strong> 10k MAU achieved on the social module.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="mt-0.5 text-green-500 shrink-0"/>
                      <span>Squad Management: Empowered a team of 7 developers.</span>
                    </li>
                 </ul>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex group">
              <div className="flex flex-col items-center mr-8">
                <div className="w-3 h-3 rounded-full bg-slate-600 border-4 border-[#0B0F19] group-hover:bg-indigo-400 group-hover:scale-150 transition-all duration-300 z-10"></div>
                <div className="w-px h-full bg-slate-800 group-hover:bg-slate-700"></div>
              </div>
              <div className="pb-12 pt-1">
                 <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">Associate PM</h3>
                    <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">2019 - 2022</span>
                 </div>
                 <div className="text-slate-400 mb-4 font-medium">JobTeaser (Design System)</div>
                 <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                   Focused on technical efficiency and scaling the Design System (Adoption Rate grew from 15% to 70%).
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-[#0B0F19] text-center relative z-10">
        <h2 className="text-2xl font-bold text-white mb-2">Ready to drive product impact?</h2>
        <p className="text-slate-400 mb-8">I am currently open to Senior & Lead PM opportunities.</p>
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://www.linkedin.com/in/arnaud-girard-64393110a/?locale=en_US" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800"
          >
            <Linkedin size={20} />
          </a>
          <a href="mailto:arnaud7.girard@hotmail.fr" className="p-3 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800"><Mail size={20} /></a>
        </div>
        <p className="text-slate-600 text-xs">© 2025 Arnaud Girard.</p>
      </footer>
    </div>
  );
};

export default Portfolio;