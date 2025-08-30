import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { FormData, FormErrors } from '../types/form';

interface RegistrationFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  isSubmitting: boolean;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    college: '',
    branch: '',
    year: '',
    email: '',
    phone: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.college.trim()) {
      newErrors.college = 'College name is required';
    }

    if (!formData.branch.trim()) {
      newErrors.branch = 'Branch/Department is required';
    }

    if (!formData.year.trim()) {
      newErrors.year = 'Year of graduation is required';
    } else if (!/^\d{4}$/.test(formData.year)) {
      newErrors.year = 'Please enter a valid 4-digit year';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      await onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/20 backdrop-blur-sm text-white placeholder-white/60 ${
              errors.fullName ? 'border-red-400 bg-red-400/20' : 'border-white/30 hover:border-white/50'
            }`}
            disabled={isSubmitting}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-300">{errors.fullName}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="College Name"
            value={formData.college}
            onChange={(e) => handleInputChange('college', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/20 backdrop-blur-sm text-white placeholder-white/60 ${
              errors.college ? 'border-red-400 bg-red-400/20' : 'border-white/30 hover:border-white/50'
            }`}
            disabled={isSubmitting}
          />
          {errors.college && (
            <p className="mt-1 text-sm text-red-300">{errors.college}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Branch/Department"
            value={formData.branch}
            onChange={(e) => handleInputChange('branch', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/20 backdrop-blur-sm text-white placeholder-white/60 ${
              errors.branch ? 'border-red-400 bg-red-400/20' : 'border-white/30 hover:border-white/50'
            }`}
            disabled={isSubmitting}
          />
          {errors.branch && (
            <p className="mt-1 text-sm text-red-300">{errors.branch}</p>
          )}
        </div>

        <div>
          <input
            type="number"
            placeholder="Year of Graduation"
            value={formData.year}
            onChange={(e) => handleInputChange('year', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/20 backdrop-blur-sm text-white placeholder-white/60 ${
              errors.year ? 'border-red-400 bg-red-400/20' : 'border-white/30 hover:border-white/50'
            }`}
            disabled={isSubmitting}
          />
          {errors.year && (
            <p className="mt-1 text-sm text-red-300">{errors.year}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/20 backdrop-blur-sm text-white placeholder-white/60 ${
              errors.email ? 'border-red-400 bg-red-400/20' : 'border-white/30 hover:border-white/50'
            }`}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-300">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/20 backdrop-blur-sm text-white placeholder-white/60 ${
              errors.phone ? 'border-red-400 bg-red-400/20' : 'border-white/30 hover:border-white/50'
            }`}
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-300">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          checked={formData.consent}
          onChange={(e) => handleInputChange('consent', e.target.checked)}
          className="mt-1 w-4 h-4 text-blue-400 border-white/30 rounded focus:ring-blue-400 bg-white/20"
          disabled={isSubmitting}
        />
        <label htmlFor="consent" className="text-sm text-white/80 leading-relaxed font-light">
          I agree to receive updates about this webinar and future events. Your information will be handled according to our privacy policy.
        </label>
      </div>
      {errors.consent && (
        <p className="text-sm text-red-300">{errors.consent}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white font-light py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 backdrop-blur-sm"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Registering...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Register for Webinar
          </>
        )}
      </button>
    </form>
  );
};

export default RegistrationForm;
