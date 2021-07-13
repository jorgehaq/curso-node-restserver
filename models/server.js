const express = require('express');
const cors = require('cors');

class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/usuarios';

        // Middleware
        this.middelwares();        

        // Rutas de mi aplicación
        this.routes();

    }

    middelwares(){

        // CORS
        this.app.use(cors());

        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){

        this.app.use(this.userPath,require('../routes/usuarios'));
    }


    listen(){

        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto', this.port);
        })
        
    }


}


module.exports=Server;