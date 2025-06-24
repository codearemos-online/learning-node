import http2 from 'http2';
import fs from 'fs';
import path from 'path';

const server = http2.createSecureServer({
    key: fs.readFileSync('./keys/server.key'),
    cert: fs.readFileSync('./keys/server.crt')
}, (req, res) => {
    const html = fs.readFileSync(path.join(__dirname, '..', 'public', 'index.html'), 'utf-8')
    const data = {
        title: 'Hello World',
        message: 'This is a message from the server'
    }

    console.log(req.url)

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(html)
        res.end()

        return;
    }

    if (req.url?.endsWith('.css')) {
        res.writeHead(200, { 'Content-Type': 'text/css' })
    } else if (req.url?.endsWith('.js')) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' })
    }

    try {
        const responseFile = fs.readFileSync(`./public${req.url}`, 'utf-8');
        res.end(responseFile)
    } catch (error) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('File not found')
    }
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})