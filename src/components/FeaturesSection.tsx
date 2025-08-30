import React from 'react';
import { Settings, CheckCircle, Layers, UserPlus } from 'lucide-react';

const features = [
  {
    icon: Settings,
    title: "JD Resume Optimizer",
    description: "AI-powered tool that tailors your resume to specific job descriptions.",
    gradientFrom: '#60a5fa', // blue-400
    gradientTo: '#818cf8', // indigo-400
  },
  {
    icon: CheckCircle,
    title: "ATS Checker",
    description: "Comprehensive analysis to ensure your resume passes applicant tracking systems.",
    gradientFrom: '#a78bfa', // purple-400
    gradientTo: '#f472b6', // pink-400
  },
  {
    icon: Layers,
    title: "Guided Builder",
    description: "Step-by-step resume creation with professional templates and suggestions.",
    gradientFrom: '#34d399', // green-400
    gradientTo: '#60a5fa', // blue-400
  },
  {
    icon: UserPlus,
    title: "LinkedIn Generator",
    description: "Automated profile optimization to enhance your professional online presence.",
    gradientFrom: '#f472b6', // pink-400
    gradientTo: '#fb923c', // orange-400
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            PrimoBoost AI Features
          </h2>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            Powerful AI-driven tools to accelerate your job search and career growth
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap -m-4">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="group relative w-[320px] h-[400px] m-8 transition-all duration-500"
              >
                {/* Skewed gradient panels */}
                <span
                  className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
                  style={{
                    background: `linear-gradient(315deg, ${feature.gradientFrom}, ${feature.gradientTo})`,
                  }}
                />
                <span
                  className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
                  style={{
                    background: `linear-gradient(315deg, ${feature.gradientFrom}, ${feature.gradientTo})`,
                  }}
                />

                {/* Animated blurs */}
                <span className="pointer-events-none absolute inset-0 z-10">
                  <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-white/10 backdrop-blur-[10px] shadow-lg transition-all duration-100 animate-blob group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
                  <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-white/10 backdrop-blur-[10px] shadow-lg transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
                </span>

                {/* Content */}
                <div className="relative z-20 left-0 p-[20px_40px] bg-black/40 backdrop-blur-md shadow-lg rounded-lg text-white transition-all duration-500 group-hover:left-[-25px] group-hover:p-[40px_40px] h-full flex flex-col justify-center border border-white/20">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-white/80 text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
