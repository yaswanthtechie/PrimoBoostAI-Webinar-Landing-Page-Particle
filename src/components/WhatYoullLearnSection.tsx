import React from 'react';
import { FileText, Target, Linkedin, TrendingUp } from 'lucide-react';
import { BentoGrid, BentoItem } from './ui/bento-grid';

const WhatYoullLearnSection: React.FC = () => {
  const learningPoints: BentoItem[] = [
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Build an ATS-Friendly Resume",
      description: "Master the art of creating AI-powered resumes that pass through applicant tracking systems and capture recruiter attention.",
      status: "Core Skill",
      tags: ["AI", "Resumes"],
      colSpan: 2,
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Land Interviews Faster",
      description: "Discover proven techniques and strategic approaches to significantly increase your interview callback rate.",
      status: "Key Strategy",
      tags: ["Job Hunt"],
    },
    {
      icon: <Linkedin className="w-6 h-6 text-white" />,
      title: "Optimize Your LinkedIn Profile",
      description: "Transform your LinkedIn presence to attract top recruiters and unlock hidden opportunities.",
      status: "Networking",
      tags: ["Branding"],
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Master Top Company Applications",
      description: "Get insider knowledge on how to tailor your applications for leading firms and stand out from the competition.",
      status: "Advanced",
      tags: ["Careers", "FAANG"],
      colSpan: 2,
    }
  ];

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What You'll Learn
          </h2>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            A comprehensive curriculum designed to transform your job search with essential skills and strategies.
          </p>
        </div>
        <BentoGrid items={learningPoints} />
      </div>
    </section>
  );
};

export default WhatYoullLearnSection;
