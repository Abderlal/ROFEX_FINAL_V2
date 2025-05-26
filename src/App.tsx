
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
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

function App() {
  return (
    <div className="App">
      <h1>ROFEX - Application en cours de chargement</h1>
      <p>Si vous voyez ce message, le rendu fonctionne correctement.</p>
    </div>
  )
}

export default App
