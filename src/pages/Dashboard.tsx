import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Padding } from '@mui/icons-material';
import DailyPlannerCard from '../components/DailyPlannerCard';
import WeeklyPlannerCard from '../components/WeeklyPlannerCard';
import WeeklyReviewCard from '../components/WeeklyReviewCard';
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

const Dashboard: React.FC = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box sx={{ flexGrow: 1, mt:4 }}>
        <Grid container spacing={3}>
          <DailyPlannerCard/>
          <WeeklyPlannerCard/>
          <WeeklyReviewCard />
        </Grid>
      </Box>
    </Container>
   
  );
};

export default Dashboard;

// import React, { useState } from 'react';

// const timeBlocks = [
//   '6:00 am', '6:30 am', '7:00 am', '7:30 am', '8:00 am', '8:30 am', '9:00 am', '9:30 am',
//   '10:00 am', '10:30 am', '11:00 am', '11:30 am', '12:00 pm', '12:30 pm', '1:00 pm', '1:30 pm',
//   '2:00 pm', '2:30 pm', '3:00 pm', '3:30 pm', '4:00 pm', '4:30 pm', '5:00 pm', '5:30 pm',
//   '6:00 pm', '6:30 pm', '7:00 pm', '7:30 pm', '8:00 pm', '8:30 pm'
// ];

// const Dashboard: React.FC = () => {
//   const [form, setForm] = useState({
//     gratefulFor: '',
//     intention: '',
//     highlight: '',
//     learned: '',
//     remember: '',
//   });

//   const [tasks, setTasks] = useState(['', '', '', '', '']);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold text-center mb-6">Welcome to Goals to Reality</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Left Column - Daily Form */}
//         <div className="bg-white rounded-lg shadow p-6 space-y-4">
//           <h2 className="text-xl font-semibold mb-2">Daily Planner</h2>

//           <TextField label="I am grateful for" name="gratefulFor" value={form.gratefulFor} onChange={setForm} />
//           <TextField label="Intention for the day" name="intention" value={form.intention} onChange={setForm} />

//           {['Most Important Task', 'Secondary Task of Importance', '', 'Additional Task', ''].map((label, i) => (
//             <TaskField key={i} order={i + 1} label={label} value={tasks[i]} onChange={(val: string) => {
//   const copy = [...tasks];
//   copy[i] = val;
//   setTasks(copy);
// }}
//  />
//           ))}

//           <TextField label="Highlight of the Day" name="highlight" value={form.highlight} onChange={setForm} />
//           <TextField label="What did I learn today?" name="learned" value={form.learned} onChange={setForm} />
//           <TextField label="What do I want to remember from today?" name="remember" value={form.remember} onChange={setForm} />

//           <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Save</button>
//         </div>

//         {/* Right Column - Timeblock Schedule */}
//         <div className="bg-white rounded-lg shadow p-6">
//           <h2 className="text-xl font-semibold mb-4">Time Block Schedule</h2>
//           <div className="space-y-2">
//             {timeBlocks.map((time, i) => (
//               <div key={i} className="flex items-center border-b pb-1">
//                 <div className="w-24 font-medium text-gray-600">{time}</div>
//                 <input type="text" className="flex-1 p-1 border rounded" placeholder="What are you doing?" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const TextField = ({ label, name, value, onChange }: any) => (
//   <div>
//     <label className="block font-medium text-gray-700 mb-1">{label}</label>
//     <textarea
//       name={name}
//       rows={1}
//       className="w-full border border-gray-300 rounded px-3 py-2"
//       value={value}
//       onChange={(e) => onChange((prev: any) => ({ ...prev, [name]: e.target.value }))}
//     />
//   </div>
// );

// const TaskField = ({ order, label, value, onChange }: any) => (
//   <div>
//     {label && <label className="block font-medium text-gray-700 mb-1">{label}</label>}
//     <div className="flex items-center space-x-2 mb-1">
//       <span className="font-semibold">{order}.</span>
//       <input
//         type="text"
//         placeholder="Type or select…"
//         className="flex-1 border border-gray-300 rounded p-2"
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//       />
//     </div>
//   </div>
// );

// export default Dashboard;