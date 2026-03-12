import { Express } from "express";

export function registerRoutes(app: Express) {
  // Exemplo de rota de API
  app.get("/api/status", (_req, res) => {
    res.json({ status: "ok", message: "iGameExpert API is running" });
  });

  // Adicione outras rotas aqui
}
