import { createRequestHandler } from "@react-router/express";
import express from "express";
import type { ServerBuild } from "react-router";

const app = express();

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/player_stats", () => {});

if (process.env.NODE_ENV === "production") {
  // React Router generates this module when running `npm run build`.
  const serverBuildUrl = new URL("./build/server/index.js", import.meta.url);
  const build = (await import(serverBuildUrl.href)) as ServerBuild;

  app.use(express.static("build/client"));
  app.use(createRequestHandler({ build }));
} else {
  const viteDevServer = await import("vite").then((vite) =>
    vite.createServer({
      server: { middlewareMode: true },
    }),
  );
  app.use(viteDevServer.middlewares);
  app.use(
    createRequestHandler({
      build: async () =>
        (await viteDevServer.ssrLoadModule(
          "virtual:react-router/server-build",
        )) as ServerBuild,
    }),
  );
}

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});
