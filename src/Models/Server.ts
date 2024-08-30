import express, { Application } from 'express';
import { PORT } from '../Config/conf';
import { dbConnection } from '../DB/Connection';
import { router } from '../Routes/routes';

class Server  {

    app: Application;
    port: string | undefined;

    constructor() {
        this.app = express();
        this.port = PORT;
        this.dbConnect()
        this.middlewares()
        this.routes()
    }
    
    async dbConnect() {
        await dbConnection()
    }

    middlewares() {
        this.app.use(express.json());
    }
    routes() {
        this.app.use(router)
    }

    listen() {
        this.app.listen(this.port, () => console.log(`🟢 Server is running on port http://localhost:${this.port}`))
    }
}

export default Server

