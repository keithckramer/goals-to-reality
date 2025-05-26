import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const Home: React.FC = () => {
  const theme = useTheme();
  const [form, setForm] = useState({
    gratefulFor: '',
    intention: '',
    highlight: '',
    learned: '',
    remember: '',
  });
  const [tasks, setTasks] = useState<string[]>(['', '', '', '', '']);

  return (
    <Box p={3} sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Welcome to Goals to Reality
      </Typography>

      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
        {/* Daily Planner Card (Scrollable Condensed) */}
        <Box flex={1}>
          <Paper elevation={3} sx={{ p: 3, maxHeight: '600px', overflowY: 'auto' }}>
            <Typography variant="h6" gutterBottom>Daily Planner</Typography>

            <CustomTextField label="I am grateful for" name="gratefulFor" value={form.gratefulFor} onChange={setForm} />
            <CustomTextField label="Intention for the day" name="intention" value={form.intention} onChange={setForm} />

            {["Most Important Task", "Secondary Task", "Task 3", "Task 4", "Task 5"].map((label, i) => (
              <TaskField
                key={i}
                order={i + 1}
                label={label}
                value={tasks[i]}
                onChange={(val: string) => {
                  const copy = [...tasks];
                  copy[i] = val;
                  setTasks(copy);
                }}
              />
            ))}

            <CustomTextField label="Highlight of the Day" name="highlight" value={form.highlight} onChange={setForm} />
            <CustomTextField label="What did I learn today?" name="learned" value={form.learned} onChange={setForm} />
            <CustomTextField label="What do I want to remember from today?" name="remember" value={form.remember} onChange={setForm} />

            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Save
            </Button>
          </Paper>
        </Box>

        {/* Timeblock Grid-Like Calendar View */}
        <Box flex={1}>
          <Paper elevation={3} sx={{ p: 3, height: '100%', maxHeight: '600px', overflowY: 'auto' }}>
            <Typography variant="h6" gutterBottom>Today's Schedule</Typography>
            <Box>
              {Array.from({ length: 15 }).map((_, i) => {
                const hour = 5 + i;
                const timeLabel = hour < 12 ? `${hour} AM` : hour === 12 ? `12 PM` : `${hour - 12} PM`;
                return (
                  <Box
                    key={i}
                    display="flex"
                    alignItems="center"
                    sx={{ borderBottom: '1px solid #333', minHeight: '40px' }}
                  >
                    <Typography variant="body2" sx={{ width: '60px', color: '#999' }}>{timeLabel}</Typography>
                    <Box flex={1} height="100%" />
                  </Box>
                );
              })}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

const CustomTextField = ({ label, name, value, onChange }: { label: string; name: string; value: string; onChange: React.Dispatch<React.SetStateAction<any>> }) => (
  <Box mb={2}>
    <Typography variant="subtitle1" gutterBottom>{label}</Typography>
    <TextField
      name={name}
      value={value}
      onChange={(e) => onChange((prev: any) => ({ ...prev, [name]: e.target.value }))}
      fullWidth
      multiline
      minRows={1}
    />
  </Box>
);

const TaskField = ({ order, label, value, onChange }: { order: number; label: string; value: string; onChange: (val: string) => void }) => (
  <Box mb={2}>
    {label && <Typography variant="subtitle2" gutterBottom>{label}</Typography>}
    <Box display="flex" alignItems="center" gap={1}>
      <Typography>{order}.</Typography>
      <TextField
        value={value}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
        placeholder="Task..."
        size="small"
      />
    </Box>
  </Box>
);

export default Home;
