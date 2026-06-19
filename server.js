import express from 'express';

const app = express();

const server_port = process.env.SERVER_PORT; 



app.listen(server_port, (error) => {
    if (error) {
        console.error(`ERRORE: la porta ${server_port} è già in utilizzo`);
        return;
    }

    console.log(`Messo in ascolto sulla porta ${server_port}`);
    
})