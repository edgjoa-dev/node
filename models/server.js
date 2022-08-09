const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.routes();
    }

    routes(){
        this.app.get('/', function(req, res){
            res.send('Hola Mundo!');
        })
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Server is running on port', this.port);
        } );
    }

}
module.exports = Server;
