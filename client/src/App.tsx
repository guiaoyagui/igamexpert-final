import React from "react"; // <--- ADICIONE ESTA LINHA AQUI TAMBÉM
import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import Services from "./components/Services";
import Team from "./components/Team";
import Jobs from "./components/Jobs";
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
    </>
  );
}

export default App;