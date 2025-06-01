import React from 'react';
import { Container, Box } from '@mui/material';
import OnboardingForm from '../components/OnBoardingForm';

const OnboardingPage = () => {
  return (
    <div>
      <Container maxWidth="sm">
      <Box mt={5}>
        <OnboardingForm />
      </Box>
    </Container>
    </div>
  );
};

export default OnboardingPage;
