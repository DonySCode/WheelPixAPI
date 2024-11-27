import express, {Application} from "express";

class Server {
    private app: Application;
    private readonly port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;
    }

    public async start() {
        try{
            this.app.listen(this.port, () => console.log("Server running on port ", this.port));
        } catch(error){
            console.error(error);
            throw error;
        }
    }
}

export default Server;
