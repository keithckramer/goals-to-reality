import axios from 'axios';

const API_BASE = "https://localhost:7048/api"; // Adjust if different

export const submitOnboardingAnswers = async (formData:any) => {
  try {
    const response = await fetch(`${API_BASE}/onboarding`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit onboarding answers");
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting onboarding data:", error);
    throw error;
  }
};

export default submitOnboardingAnswers;