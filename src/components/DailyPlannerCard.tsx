import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import PlannerSchedule from "./PlannerSchedule";
import { Height } from "@mui/icons-material";

// Styled
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: (theme.vars ?? theme).palette.text.secondary,
  minHeight: 620,
  borderRadius: 12,
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  position: "relative"
}));

const SmallInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  "& .MuiInputBase-input": {
    padding: "10px 12px",
    fontSize: 15,
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 8,
    background: "#f9f9f9"
  }
}));

const Circle = ({ filled }: { filled: boolean }) => (
  <span
    style={{
      display: "inline-block",
      width: 18,
      height: 18,
      marginRight: 4,
      borderRadius: "50%",
      border: "2px solid #1976d2",
      background: filled ? "#1976d2" : "transparent",
      transition: "background 0.2s"
    }}
  />
);

const FaintBox = styled(Box)(({ theme }) => ({
  background: "#f5f7fa",
  borderRadius: 10,
  // padding: theme.spacing(2),
  // marginTop: theme.spacing(2),
  minHeight: 350,
  height:"100%",
  textAlign: "left"
}));

const SubLabel = styled(Typography)({
  fontSize: 13,
  fontWeight: 500,
  marginBottom: 4,
  marginTop: 8,
});

const SectionLabel = styled(Typography)({
  fontWeight: 600,
  fontSize: 16,
  marginBottom: 8,
  marginTop: 16,
});

const DailyPlannerCard = () => {
  // Placeholder values for the mood/ratings, adjust as needed.
  const stars = [1, 2, 3, 4, 5];
  const moods = [
    <SentimentVeryDissatisfiedIcon fontSize="small" />,
    <SentimentDissatisfiedIcon fontSize="small" />,
    <SentimentNeutralIcon fontSize="small" />,
    <SentimentSatisfiedAltIcon fontSize="small" />,
    <SentimentVerySatisfiedIcon fontSize="small" />,
  ];

  // Generate times for schedule (6:00 to 21:30, every 30 min)
  const scheduleTimes = Array.from({ length: 32 }, (_, i) => {
    const hour = Math.floor(i / 2) + 6;
    const minute = i % 2 === 0 ? "00" : "30";
    return `${hour < 10 ? "0" + hour : hour}:${minute}`;
  });

  return (
    <Grid size={5} >
      <Item>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h6" fontWeight={600}>Daily Planner</Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}
          </Typography>
        </Box>
        {/* --- Main Content --- */}
        <Box display="flex" gap={2}>
          {/* LEFT: Inputs */}
          <Box flex={1} minWidth={230}>
            <SmallInput
              fullWidth
              size="small"
              placeholder="I am grateful for..."
              variant="outlined"
            />
            <SmallInput
              fullWidth
              size="small"
              placeholder="Intention for the day..."
              variant="outlined"
            />
            {/* Most Important Task */}
            {/* <Box
              mt={2}
              mb={1}
              p={2}
              sx={{ background: "#f5f7fa", borderRadius: 2, minHeight: 75 }}
            >
              <SubLabel>Most Important Task</SubLabel>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter task..."
                variant="outlined"
                InputProps={{ sx: { background: "#fff", borderRadius: 1 } }}
              />
              <Box display="flex" alignItems="center" mt={1}>
                <Typography variant="caption" sx={{ mr: 1 }}>30min:</Typography>
                {[...Array(5)].map((_, idx) => (
                  <Circle key={idx} filled={idx < 4} />
                ))}
              </Box>
            </Box> */}
            <SubLabel>Most Important Task</SubLabel>
            <SmallInput
              fullWidth
              size="small"
              placeholder="Most Important Task"
              variant="outlined"
            />
            <SubLabel>Secondary Tasks</SubLabel>
            <SmallInput
              fullWidth
              size="small"
              placeholder="Task 2..."
              variant="outlined"
            />
            <SmallInput
              fullWidth
              size="small"
              placeholder="Task 3..."
              variant="outlined"
            />
            <SubLabel>Additional Tasks</SubLabel>
            <SmallInput
              fullWidth
              size="small"
              placeholder="Task 4..."
              variant="outlined"
            />
            <SmallInput
              fullWidth
              size="small"
              placeholder="Task 5..."
              variant="outlined"
            />

            {/* Reflection */}
            <SectionLabel>Daily Reflection</SectionLabel>
            <SmallInput
              fullWidth
              size="small"
              placeholder="Highlight of the Day"
              variant="outlined"
            />
            <SmallInput
              fullWidth
              size="small"
              placeholder="What I Learned"
              variant="outlined"
            />
            <SmallInput
              fullWidth
              size="small"
              placeholder="What I Want to Remember"
              variant="outlined"
            />
            {/* Mood/Stars */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
              <Box>
                {moods.map((icon, i) => (
                  <IconButton size="small" key={i} sx={{ color: "#bbb" }}>
                    {icon}
                  </IconButton>
                ))}
              </Box>
              <Box>
                {stars.map((star, i) =>
                  i < 3 ? (
                    <StarIcon fontSize="small" sx={{ color: "#ffc107" }} key={i} />
                  ) : (
                    <StarBorderIcon fontSize="small" sx={{ color: "#ffc107" }} key={i} />
                  )
                )}
              </Box>
            </Box>
          </Box>
          {/* RIGHT: Schedule */}
          <FaintBox flex={1.1}>
            <Box component="ul" sx={{ listStyle: "none", pl: 0, mb: 0 }}>
              <PlannerSchedule />
            </Box>
          </FaintBox>
        </Box>
      </Item>
    </Grid>
  );
};

export default DailyPlannerCard;
