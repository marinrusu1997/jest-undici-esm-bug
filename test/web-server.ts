import { createServer } from "http";
import { createHttpTerminator } from "http-terminator";

const HOSTNAME = "127.0.0.1";
const PORT = 6892;

const BASE_URL = `http://${HOSTNAME}:${PORT}`;

const server = createServer((_req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
const httpTerminator = createHttpTerminator({ server });

async function startServer() {
    await new Promise<void>((resolve, reject) => {
        server.listen(PORT, HOSTNAME, resolve);
        server.once('error', (err) => reject(err));
    });
}

async function stopServer() {
    await httpTerminator.terminate();
}

export { startServer, stopServer, BASE_URL };
