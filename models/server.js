const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();


        //Routes aplication

        this.routes();
    }

    middlewares(){

        this.app.use(express.static('public'));

    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.json({
                ok: true,
                message: ' Get'
            });
        })
        this.app.put('/api', (req, res) => {
            res.json({
                ok: true,
                message: ' Put'
            });
        })
        this.app.post('/api', (req, res) => {
            res.json({
                ok: true,
                message: ' Post'
            });
        })
        this.app.patch('/api', (req, res) => {
            res.json({
                ok: true,
                message: ' Patch'
            });
        })
        this.app.delete('/api', (req, res) => {
            res.json({
                ok: true,
                message: ' Delete'
            });
        })
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Server is running on port', this.port);
        } );
    }

}
module.exports = Server;
