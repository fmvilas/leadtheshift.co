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
              {
                name: "Pilot Success Showcase",
                href: "https://docs.google.com/document/d/1_gh25tbl2PXtjFubWSx1VILT7ueRJ7kSpIBT3WpBamI/edit?usp=sharing",
                target: "_blank",
              },
              {
                name: "Elevator Pitch Template for EDA",
                href: "https://docs.google.com/document/d/1hU4HjhaJuwZYeCaTfCWU5YlEi3OwE7AU4BgDNQmbA1U/edit?usp=sharing",
                target: "_blank",
              },
              {
                name: "Narrative Framework for EDA Advocacy",
                href: "https://docs.google.com/document/d/1jleMlEnIhHOzdcaqOOKPXT3Q4rYguid3WIO0yuOv_IU/edit?usp=sharing",
                target: "_blank",
              }
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
