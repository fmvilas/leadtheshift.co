import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StyleGuide from "./pages/resources/ShiftCommunicationStyleGuide";
import VistaFramework from "./pages/resources/VistaFramework";
import "./App.css";
import NavBar from "./components/NavBar";
import ManagementChecklist from "./pages/resources/ManagementChecklist";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GoogleAnalytics />
      <NavBar
        items={[
          { name: "Home", href: "/" },
          {
            name: "Resources",
            dropdown: [
              {
                name: "Communication Style Guide",
                href: "/resources/shift-communication-style-guide",
              },
              { name: "Vista Framework", href: "/resources/vista-framework" },
              {
                name: "Complexity Management Checklist",
                href: "/resources/management-checklist",
              },
            ],
          },
        ]}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/resources/shift-communication-style-guide"
            element={<StyleGuide />}
          />
          <Route
            path="/resources/vista-framework"
            element={<VistaFramework />}
          />
          <Route
            path="/resources/management-checklist"
            element={<ManagementChecklist />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
