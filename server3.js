// Importamos la biblioteca de terceros 'express'
const express = require('express');
const path = require('path');

// Crear una nueva instancia del objeto Express
const app = express();

// Define un endpoint a la URL '/', método GET, y ejecutrá la función de callback del segundo parámetro cada vez que reciba una petición


    app.get('/nacktschnecke', function (req, res) {

        res.sendFile(path.join(__dirname, '/server3-files/nacktschnecke.html'));        
     })

    app.get('/about', function (req, res) {

        res.sendFile(path.join(__dirname, '/server3-files/about.html'));        
     })
     
     app.use('/', function (req, res) {

        res.status(404).send(`<h1>**Resource not fund**</h1><p> La respuesta es de tipo "${typeof res}" y el estatus es: ${res.statusCode}</p>`);
    })
    
     

    
app.listen(3000);       