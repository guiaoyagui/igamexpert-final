import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Selecionamos o elemento 'root' do teu index.html
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Não foi possível encontrar o elemento root no HTML.");
}

// Renderização limpa: sem tRPC, sem Providers desnecessários
createRoot(rootElement).render(
  <App />
);