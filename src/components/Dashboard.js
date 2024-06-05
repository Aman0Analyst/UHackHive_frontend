import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  CircularProgress,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 6, minHeight: '100vh', backgroundColor: '#ffffff', color: '#333333' }}>
      <Grid container spacing={3}>
        {/* First Line: Total Sales, Total Users, Satisfaction Rate */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, mt: 2, backgroundColor: '#ffcc80', color: '#333333', textAlign: 'center' }}>
            <Typography variant="h6">Cost Saved</Typography>
            <Typography variant="h4">$173,000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, mt: 2, backgroundColor: '#ffcc80', color: '#333333', textAlign: 'center' }}>
            <Typography variant="h6">Total Units Consumed</Typography>
            <Typography variant="h4">2,300</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, mt: 2,  backgroundColor: '#ffcc80', color: '#333333', textAlign: 'center' }}>
            <Typography variant="h6">Forecast Accuracy</Typography>
            <CircularProgress variant="determinate" value={95} />
          </Paper>
        </Grid>
        
        {/* Second Line: Jellyfish and Referral Tracking */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, backgroundColor: '#ffe0b2', color: '#333333', position: 'relative' }}>
            <Typography variant="h5">Welcome back, Mark Johnson</Typography>
            <img src="https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?cs=srgb&dl=pexels-pixabay-301599.jpg&fm=jpg" alt="Jellyfish" style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', objectFit: 'cover', marginTop: '10px' }} />
            <Typography variant="subtitle1">Glad to see you again! Ask me anything.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, backgroundColor: '#ffe0b2', color: '#333333', textAlign: 'center' }}>
            <Typography variant="h6">Grids Onboarded</Typography>
            <Typography variant="body1">Invited: 145 Grids</Typography>
            <Typography variant="body1">Active: 1,465 Grids</Typography>
          </Paper>
        </Grid>

        {/* Third Line: Sales Overview and Active Users */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, backgroundColor: '#ffd54f', color: '#333333', textAlign: 'center' }}>
            <Typography variant="h6">Power Generated by Solar Panel</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#333333" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, backgroundColor: '#ffd54f', color: '#333333', textAlign: 'center' }}>
            <Typography variant="h6">UV Forecast</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#333333" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
