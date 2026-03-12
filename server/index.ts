import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from client/dist in production
  if (process.env.NODE_ENV === "production") {
    const clientDistPath = path.resolve(__dirname, "..", "client", "dist");
    app.use(express.static(clientDistPath));

    // Handle client-side routing - serve index.html for all routes
    app.get("*", (_req, res) => {
      res.sendFile(path.join(clientDistPath, "index.html"));
    });
  } else {
    // In development, the client is served by Vite's dev server (usually on port 5173)
    // This Express server will only handle API requests.
    // For a combined dev experience, `concurrently` will be used in package.json to run both.
    console.log("Running Express server in development mode (API only).");
    console.log("Client application should be served by Vite's dev server.");
  }

  // Import and register API routes
  const { registerRoutes } = await import("./routes.js");
  registerRoutes(app);

  const port = process.env.PORT || 5000; // Changed to 5000 as per user's README

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
