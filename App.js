import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme/theme';

import ClientDashboard from './pages/ClientDashboard';
import AdminDashboard from './pages/AdminDashboard';
import OnboardingWizard from './pages/OnboardingWizard';
import Orders from './pages/Orders';
import Team from './pages/Team';
import KPIDetails from './pages/KPIDetails';
import ProjectsPage from './pages/ProjectsPage';
import ActionsPage from './pages/ActionsPage';
import TicketsPage from './pages/TicketsPage';
import MRRPage from './pages/MRRPage';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<ClientDashboard />} />
          <Route path="/kpi/:kpi" element={<KPIDetails />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/onboarding" element={<OnboardingWizard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/actions" element={<ActionsPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/mrr" element={<MRRPage />} />
          
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
