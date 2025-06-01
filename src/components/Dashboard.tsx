import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const [form, setForm] = useState({
    gratefulFor: '',
    intention: '',
    highlight: '',
    learned: '',
    remember: '',
  });
  const [tasks, setTasks] = useState<string[]>(['', '', '', '', '']);
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
          <Item>Email subscribe section</Item>
        </Grid>
        <Grid container spacing={4} size={{ xs: 12, md: 7, lg: 8 }}>
          <Grid size={{ xs: 6, lg: 3 }}>
            <Item>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category A
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <li>Link 1.1</li>
                <li>Link 1.2</li>
                <li>Link 1.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid size={{ xs: 6, lg: 3 }}>
            <Item>
              <Box
                id="category-b"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category B
              </Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid size={{ xs: 6, lg: 3 }}>
            <Item>
              <Box
                id="category-c"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category C
              </Box>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                <li>Link 3.1</li>
                <li>Link 3.2</li>
                <li>Link 3.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid size={{ xs: 6, lg: 3 }}>
            <Item>
              <Box
                id="category-d"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category D
              </Box>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                <li>Link 4.1</li>
                <li>Link 4.2</li>
                <li>Link 4.3</li>
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
          size={12}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item>© Copyright</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>Link A</Item>
            </Grid>
            <Grid>
              <Item>Link B</Item>
            </Grid>
            <Grid>
              <Item>Link C</Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    // <Box p={3} sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
    //   <Typography variant="h4" gutterBottom textAlign="center">
    //     Welcome to Goals to Reality
    //   </Typography>

    //   <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
    //     {/* Daily Planner Card (Scrollable Condensed) */}
    //     <Box flex={1}>
    //       <Paper elevation={3} sx={{ p: 3, maxHeight: '600px', overflowY: 'auto' }}>
    //         <Typography variant="h6" gutterBottom>Daily Planner</Typography>

    //         <CustomTextField label="I am grateful for" name="gratefulFor" value={form.gratefulFor} onChange={setForm} />
    //         <CustomTextField label="Intention for the day" name="intention" value={form.intention} onChange={setForm} />

    //         {["Most Important Task", "Secondary Task", "Task 3", "Task 4", "Task 5"].map((label, i) => (
    //           <TaskField
    //             key={i}
    //             order={i + 1}
    //             label={label}
    //             value={tasks[i]}
    //             onChange={(val: string) => {
    //               const copy = [...tasks];
    //               copy[i] = val;
    //               setTasks(copy);
    //             }}
    //           />
    //         ))}

    //         <CustomTextField label="Highlight of the Day" name="highlight" value={form.highlight} onChange={setForm} />
    //         <CustomTextField label="What did I learn today?" name="learned" value={form.learned} onChange={setForm} />
    //         <CustomTextField label="What do I want to remember from today?" name="remember" value={form.remember} onChange={setForm} />

    //         <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
    //           Save
    //         </Button>
    //       </Paper>
    //     </Box>

    //     {/* Timeblock Grid-Like Calendar View */}
    //     <Box flex={1}>
    //       <Paper elevation={3} sx={{ p: 3, height: '100%', maxHeight: '600px', overflowY: 'auto' }}>
    //         <Typography variant="h6" gutterBottom>Today's Schedule</Typography>
    //         <Box>
    //           {Array.from({ length: 15 }).map((_, i) => {
    //             const hour = 5 + i;
    //             const timeLabel = hour < 12 ? `${hour} AM` : hour === 12 ? `12 PM` : `${hour - 12} PM`;
    //             return (
    //               <Box
    //                 key={i}
    //                 display="flex"
    //                 alignItems="center"
    //                 sx={{ borderBottom: '1px solid #333', minHeight: '40px' }}
    //               >
    //                 <Typography variant="body2" sx={{ width: '60px', color: '#999' }}>{timeLabel}</Typography>
    //                 <Box flex={1} height="100%" />
    //               </Box>
    //             );
    //           })}
    //         </Box>
    //       </Paper>
    //     </Box>
    //   </Box>
    // </Box>
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

export default Dashboard;
