import express, { Router } from 'express';
import path from 'path';
interface Options {
    port: number;
    publicPath: string;
    routes:Router;
}
export class Server {

    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes:Router;
    constructor(private options: Options) {
        this.port = options.port;
        this.publicPath = options.publicPath;
        this.routes = options.routes;
    }

    private app = express();

    start() {

        /** MIDDLEWARES */
        this.app.use(express.json())

        this.app.use(express.static('public'))

        /** ROUTES */
        this.app.use(this.routes);
        

        this.app.get('/*splat', (req, res) => {
            const indexPath = path.join(__dirname, '..', '..', this.publicPath, 'index.html')
            res.sendFile(indexPath)
        })

        this.app.listen(this.port, () => {
            console.log('Server started on port 3000');
        });
    }
}
