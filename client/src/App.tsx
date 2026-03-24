import { Switch, Route } from "wouter";
import Home from "./pages/Home"; // Mantém se a Home estiver em pages
import Services from "./components/Services"; // Apontando para components
import Team from "./components/Team";         // Apontando para components
import Jobs from "./components/Jobs";         // Apontando para components
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicos" component={Services} />
      <Route path="/equipe" component={Team} />
      <Route path="/vagas" component={Jobs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <Router />
      {/* Removemos o <Toaster /> daqui para não dar erro */}
    </>
  );
}

export default App;