import express from 'express';
import path from 'path';

interface Options {
    port: number;
    publicPath: string;
}

export class Server {

    private readonly port: number;
    private readonly publicPath: string;
    constructor(private options: Options) {
        this.port = options.port;
        this.publicPath = options.publicPath;
    }

    private app = express();

    start() {
        this.app.use(express.static('public'))

        /** ROUTES */
        this.app.get('/api/todos', (req, res) => {
            res.json([
                {
                    'id': 1,
                    'task': 'buy milk'
                },
                {
                    'id': 2,
                    'task': 'buy bread'
                },
            ])
        })

        this.app.get('/*splat', (req, res) => {
            const indexPath = path.join(__dirname, '..', '..', this.publicPath, 'index.html')
            res.sendFile(indexPath)
        })


        this.app.listen(this.port, () => {
            console.log('Server started on port 3000');
        });
    }
}
