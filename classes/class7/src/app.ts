import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req,res) => {
    const html = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf-8')
    
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(html)
        res.end()
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write('Not found')
        res.end()
    }
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})