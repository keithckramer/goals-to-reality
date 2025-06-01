import React, { useState } from 'react';
import { Box, Button, Typography, TextField, Checkbox, FormControlLabel } from '@mui/material';
import submitOnboardingAnswers from '../services/OnBoardingService';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const steps = ['About You', 'Your Goals', 'Habits', 'Review'];

const OnboardingForm = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // <-- For redirect
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    occupation: '',
    biggestChallenge: '',
    goal: '',
    timeline: '',
    why: '',
    workTime: '',
    planningStyle: '',
    wantsAccountability: false,
    email: '',
    password: '',
  });

  const handleNext = async () => {
  if (step < steps.length - 1) {
    setStep(step + 1);
  } else {
    try {
      setLoading(true);

      // Submit onboarding answers
      await submitOnboardingAnswers(formData);

      // Prepare registration data
      const registrationData = {
        username: formData.name.replace(/\s+/g, '').toLowerCase(), // or add a field for this
        email: formData.email,
        password: formData.password
        // address: '',
        // city: '',
        // stateId: '',
        // zip: '',
        // birthday: ''
      };

      // Call register API
      const response = await AuthService.registerUser(registrationData);

      // Save token if returned
      if (response?.token) {
        localStorage.setItem('token', response.token);
      }

      // Navigate to dashboard
      navigate('/Dashboard');
    } catch (err) {
      alert('Error submitting onboarding or registration.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
};


  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <Box>
      <Typography variant="h5">{steps[step]}</Typography>

      <Box mt={3}>
        {step === 0 && (
          <>
            <TextField fullWidth label="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} margin="normal" />
            <TextField fullWidth label="Age" type="number" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} margin="normal" />
            <TextField fullWidth label="Occupation" value={formData.occupation} onChange={(e) => setFormData({ ...formData, occupation: e.target.value })} margin="normal" />
            <TextField fullWidth label="What’s your biggest challenge right now?" multiline rows={3} value={formData.biggestChallenge} onChange={(e) => setFormData({ ...formData, biggestChallenge: e.target.value })} margin="normal" />
          </>
        )}

        {step === 1 && (
          <>
            <TextField fullWidth label="What’s your #1 goal right now?" value={formData.goal} onChange={(e) => setFormData({ ...formData, goal: e.target.value })} margin="normal" />
            <TextField fullWidth label="Timeline to reach your goal?" placeholder="e.g. 3 months, 6 months" value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} margin="normal" />
            <TextField fullWidth label="Why does this matter to you?" multiline rows={3} value={formData.why} onChange={(e) => setFormData({ ...formData, why: e.target.value })} margin="normal" />
          </>
        )}

        {step === 2 && (
          <>
            <TextField fullWidth label="Best time of day to work?" placeholder="e.g. Morning, Afternoon, Evening" value={formData.workTime} onChange={(e) => setFormData({ ...formData, workTime: e.target.value })} margin="normal" />
            <TextField fullWidth label="Preferred planning style?" placeholder="e.g. Rigid schedule, Flexible blocks, Visual boards" value={formData.planningStyle} onChange={(e) => setFormData({ ...formData, planningStyle: e.target.value })} margin="normal" />
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                margin="normal" />
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                margin="normal" />

            <FormControlLabel
              control={<Checkbox checked={formData.wantsAccountability} onChange={(e) => setFormData({ ...formData, wantsAccountability: e.target.checked })} />}
              label="I want accountability tools (like check-ins or reminders)"
              sx={{ mt: 2 }}
            />
          </>
        )}

        {step === 3 && (
          <Box>
            <Typography variant="h6" gutterBottom>Review Your Answers</Typography>
            <ul>
              <li><strong>Name:</strong> {formData.name}</li>
              <li><strong>Age:</strong> {formData.age}</li>
              <li><strong>Occupation:</strong> {formData.occupation}</li>
              <li><strong>Biggest Challenge:</strong> {formData.biggestChallenge}</li>
              <li><strong>#1 Goal:</strong> {formData.goal}</li>
              <li><strong>Timeline:</strong> {formData.timeline}</li>
              <li><strong>Why it Matters:</strong> {formData.why}</li>
              <li><strong>Best Time to Work:</strong> {formData.workTime}</li>
              <li><strong>Planning Style:</strong> {formData.planningStyle}</li>
              <li><strong>Wants Accountability:</strong> {formData.wantsAccountability ? 'Yes' : 'No'}</li>
            </ul>
          </Box>
        )}
      </Box>

      <Box mt={3} display="flex" justifyContent="space-between">
        <Button variant="outlined" disabled={step === 0 || loading} onClick={handleBack}>Back</Button>
        <Button variant="contained" color="primary" onClick={handleNext} disabled={loading}>
          {loading ? 'Submitting...' : (step === steps.length - 1 ? 'Finish' : 'Next')}
        </Button>
      </Box>
    </Box>
  );
};

export default OnboardingForm;
