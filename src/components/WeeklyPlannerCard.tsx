import React from 'react';
import { Card, Typography, TextField, Rating, IconButton } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const timeBlocks = Array.from({ length: 32 }, (_, i) => {
  const hour = Math.floor(i / 2) + 6;
  const minute = i % 2 === 0 ? '00' : '30';
  return `${hour}:${minute}`;
});

const moodIcons = [
  <SentimentVeryDissatisfiedIcon fontSize="small" key={0} />,
  <SentimentDissatisfiedIcon fontSize="small" key={1} />,
  <SentimentNeutralIcon fontSize="small" key={2} />,
  <SentimentSatisfiedAltIcon fontSize="small" key={3} />,
  <SentimentVerySatisfiedIcon fontSize="small" key={4} />,
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const WeeklyPlannerCard: React.FC = () => {
  return (
    <Grid size={6}>
        <Item>Weekly Planner</Item>
    </Grid>
  );
};

export default WeeklyPlannerCard;
