import express from 'express';
import path from 'path';

export class Server {
    private app = express();

    start() {
        this.app.use(express.static('public'))

        this.app.get('/*splat', (req, res) => {
            const indexPath = path.join(__dirname, '..', '..', 'public', 'index.html')
            res.sendFile(indexPath)
        })


        this.app.listen(3000, () => {
            console.log('Server started on port 3000');
        });
    }
}
