import React from 'react';
import AnimatedNumberCountdown from '@/components/ui/countdown-number';

interface CountdownTimerSectionProps {
  scrollToRegistration: () => void;
}

const CountdownTimerSection: React.FC<CountdownTimerSectionProps> = ({ scrollToRegistration }) => {
  const webinarDate = new Date("2025-09-07T14:00:00+05:30"); // September 7, 2025, 2:00 PM IST

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Limited Seats – Register Before It’s Too Late!
            </h2>
            <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
              The webinar is filling up fast. Secure your spot now!
            </p>
          </div>
          <AnimatedNumberCountdown
            endDate={webinarDate}
            className="my-4"
          />
          <div className="text-center mt-8">
            <button 
              onClick={scrollToRegistration}
              className="bg-gradient-to-r from-blue-400 to-purple-400 text-white font-medium py-3 px-6 text-base sm:py-4 sm:px-8 sm:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
            >
              Reserve My Free Seat Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimerSection;
