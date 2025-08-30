import React, { useState, lazy, Suspense } from 'react';
import { Globe } from 'lucide-react';
import RegistrationForm from './components/RegistrationForm';
import Toast from './components/Toast';
import { Footer } from './components/ui/footer';
import { WovenLightHero } from './components/ui/woven-light-hero';
import { FormData } from './types/form';
import { submitToGoogleSheets } from './services/googleSheets';

// Lazy load components
const WebinarVideoSection = lazy(() => import('./components/WebinarVideoSection'));
const WhatYoullLearnSection = lazy(() => import('./components/WhatYoullLearnSection'));
const FeaturesSection = lazy(() => import('./components/FeaturesSection'));
const SpeakerBioSection = lazy(() => import('./components/SpeakerBioSection'));
const CountdownTimerSection = lazy(() => import('./components/CountdownTimerSection'));
const SocialProofSection = lazy(() => import('./components/SocialProofSection'));

const LoadingSpinner = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="loader"></div>
  </div>
);

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
  }>({
    message: '',
    type: 'success',
    isVisible: false,
  });

  const handleFormSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    
    try {
      await submitToGoogleSheets(formData);
      setToast({
        message: 'Registration successful! Check your email for webinar details.',
        type: 'success',
        isVisible: true,
      });
       // ✅ WhatsApp Redirect Feature
    const whatsappUrl = import.meta.env.VITE_WHATSAPP_CHANNEL_URL;
    if (whatsappUrl && whatsappUrl !== 'YOUR_WHATSAPP_CHANNEL_URL') {
      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 2000); // delay for UX
    }

    } catch (error) {
      setToast({
        message: 'Registration failed. Please try again.',
        type: 'error',
        isVisible: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  // Smooth scroll to registration form
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-black">
      <WovenLightHero />
      
      {/* Content Overlay */}
      <div className="relative z-10 bg-black">
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={closeToast}
        />

        <Suspense fallback={<LoadingSpinner />}>
          {/* Webinar Video Section */}
          <section id="video">
            <WebinarVideoSection />
          </section>

          {/* What You'll Learn Section */}
          <section id="learn">
            <WhatYoullLearnSection />
          </section>

          {/* PrimoBoost AI Features Section */}
          <section id="features">
            <FeaturesSection />
          </section>

          {/* Speaker Bio Section */}
          <section id="speaker">
            <SpeakerBioSection />
          </section>

          {/* Countdown Timer Section */}
          <CountdownTimerSection scrollToRegistration={scrollToRegistration} />

          {/* Registration Form Section */}
          <section id="registration" className="py-16 sm:py-24 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extralight text-white mb-4">
                  Secure Your Spot Today
                </h2>
                <p className="text-lg text-white/80 font-light">
                  Fill out the form below to register for this exclusive webinar
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 sm:p-12">
                <RegistrationForm 
                  onSubmit={handleFormSubmit}
                  isSubmitting={isSubmitting}
                />
              </div>
            </div>
          </section>

          {/* Social Proof Section */}
          <section id="social-proof">
            <SocialProofSection />
          </section>
        </Suspense>

        {/* Footer */}
        <Footer
          logo={<span className="text-2xl font-bold text-white">⎎</span>}
          brandName="PrimoBoostAi"
          socialLinks={[
            {
              icon: <Globe className="h-5 w-5" />,
              href: "https://primoboostai.in/",
              label: "Website",
            },
          ]}
          mainLinks={[
            { href: "#", label: "About" },
            { href: "#", label: "Contact" },
          ]}
          legalLinks={[
            { href: "#", label: "Privacy Policy" },
            { href: "#", label: "Terms of Service" },
          ]}
          copyright={{
            text: "© 2025 PrimoBoostAi.",
            license: "All rights reserved.",
          }}
        />
      </div>
    </div>
  );
}

export default App;
