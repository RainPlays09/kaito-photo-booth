import express from "express";
import path from "node:path";
import localtunnel from "localtunnel";
const app = express();
const PORT = 3000;
const rootPath = process.cwd();
// Serve a static HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(rootPath, "index.html"));
});
app.listen(PORT, () => {
    console.log(`[EXPRESS_JS] Server is running on http://localhost:${PORT}`);
});
(async () => {
    const tunnel = await localtunnel({ port: 3000 });
    console.log(`[LOCALTUNNEL] Localhost Exposed: ${tunnel.url}`);
    tunnel.on("close", () => {
        console.log("[LOCALTUNNEL] Tunnel is closed");
    });
})();
//# sourceMappingURL=server.js.map