import React from 'react';
import { Award, Users, BookOpen, User } from 'lucide-react';

const SpeakerBioSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet Your Speaker
          </h2>
          <p className="text-lg text-white/70 font-light">
            Learn from industry experts with proven track records
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Speaker Photo */}
            <div className="lg:col-span-1">
              <div className="relative max-w-sm mx-auto lg:max-w-none">
                <div className="aspect-square rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 flex items-center justify-center">
                  {/* Placeholder - Replace with actual speaker image */}
                  <div className="text-center">
                    <div className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-4 bg-black/20 border border-white/10">
                      <User className="w-16 h-16 text-white/70" />
                    </div>
                    <p className="text-white/80 text-sm font-medium">Speaker Photo</p>
                    <p className="text-white/60 text-xs font-light">Alex Johnson</p>
                  </div>
                  {/* 
                  Uncomment and replace with actual image:
                  <img 
                    src="/speaker-photo.jpg" 
                    alt="Alex Johnson"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  */}
                </div>
              </div>
            </div>

            {/* Speaker Bio */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Alex Johnson
              </h3>
              <p className="text-blue-300 font-medium mb-6">
                Senior Career Coach & AI Technology Expert
              </p>
              
              <div className="space-y-4 mb-8">
                <p className="text-white/80 font-light leading-relaxed">
                  With over 8 years of experience in career coaching and AI technology, Alex has helped 2,000+ professionals land their dream jobs at top companies including Google, Microsoft, and Amazon.
                </p>
                <p className="text-white/80 font-light leading-relaxed">
                  As a former recruiter and current AI specialist, Alex brings unique insights into what employers really want and how to leverage technology for job search success.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <Users className="w-5 h-5 text-blue-300" />
                    <div>
                      <p className="text-white font-medium text-sm">2000+</p>
                      <p className="text-white/60 text-xs">Clients Coached</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <Award className="w-5 h-5 text-purple-300" />
                    <div>
                      <p className="text-white font-medium text-sm">8 Years</p>
                      <p className="text-white/60 text-xs">Experience</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <BookOpen className="w-5 h-5 text-green-300" />
                    <div>
                      <p className="text-white font-medium text-sm">95%</p>
                      <p className="text-white/60 text-xs">Success Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerBioSection;
