import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./components/Services";
import Events from "./components/Events";
import Jobs from "./components/Jobs";
import EventDetails from "./pages/EventDetails";
import ScrollToAnchor from "./components/ScrollToAnchor";
// Importamos a nova página da Equipa
import TeamPage from "./pages/TeamPage"; 

function Router() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/servicos" component={Services} />
        <Route path="/eventos" component={Events} />
        <Route path="/evento/:id" component={EventDetails} />
        <Route path="/vagas" component={Jobs} />
        {/* A NOSSA NOVA ROTA AQUI */}
        <Route path="/equipe" component={TeamPage} /> 
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <ScrollToAnchor />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;