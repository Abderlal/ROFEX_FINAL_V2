import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ClientDashboard from "./pages/ClientDashboard";
import TechnicianSearch from "./pages/TechnicianSearch";
import TechnicianResults from "./pages/TechnicianResults";
import TechnicianProfile from "./pages/TechnicianProfile";
import TechnicianDashboard from "./pages/TechnicianDashboard";
import TechnicianAvailability from "./pages/TechnicianAvailability";
import Home from "@/pages/Home";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/rofex-final">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client/*" element={<ProtectedRoute role="client"><ClientDashboard /></ProtectedRoute>} />
            <Route path="/technician/search" element={<TechnicianSearch />} />
            <Route path="/technician/results" element={<TechnicianResults />} />
            <Route path="/technician/profile" element={<TechnicianProfile />} />
            <Route path="/technician/dashboard" element={<ProtectedRoute role="technician"><TechnicianDashboard /></ProtectedRoute>} />
            <Route path="/technician/availability" element={<TechnicianAvailability />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;