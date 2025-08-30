import axios from 'axios';
import { FormData } from '../types/form';

// This now correctly reads the URL from your .env file
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export const submitToGoogleSheets = async (formData: FormData): Promise<void> => {
  try {
    // For demo purposes, we'll simulate the API call if the URL is not set or is the placeholder
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'API_KEY_ADDED') {
      console.warn('Google Script URL not found or is a placeholder. Running in demo mode.');
      // Simulate API delay for demo
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate random success/failure for demo
      if (Math.random() > 0.1) {
        console.log('Demo: Form data would be sent to Google Sheets:', formData);
        return;
      } else {
        throw new Error('Demo: Simulated network error');
      }
    }

    // This part runs when you have a real URL in your .env file
    // The fix is to change the Content-Type to 'text/plain' to avoid a CORS preflight request,
    // which is what was causing the network error.
    const response = await axios.post(
      GOOGLE_SCRIPT_URL,
      JSON.stringify({ // Send data as a raw string
        ...formData,
        timestamp: new Date().toISOString(),
      }),
      {
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      }
    );

    if (response.status !== 200) {
      throw new Error('Failed to submit registration');
    }
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    throw new Error('Failed to submit registration. Please try again.');
  }
};
