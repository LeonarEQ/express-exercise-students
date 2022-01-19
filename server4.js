// Importamos la biblioteca de terceros 'express'
const express = require('express');

// Crear una nueva instancia del objeto Express
const app = express();

// Define un endpoint a la URL '/', método GET, y ejecutrá la función de callback del segundo parámetro cada vez que reciba una petición


    app.get('/check/:id', function (req, res) {

        let id = req.params.id;
        
        if (id == "eye") {res.send(`<h1>"${id} es un palíndromo".</h1>`);}
        else if (id == "vaca") {res.send(`<h1>"${id} no es un palíndromo".</h1>`);}
         
     })
     
     app.use('/', function (req, res) {

        res.status(404).send(`<h1>No se encuentra la página!</h1><p> La respuesta es de tipo "${typeof res}" y el estatus es: ${res.statusCode}</p>`);
    })
    
     

    
app.listen(3000);     