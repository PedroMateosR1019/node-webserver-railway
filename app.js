//Varaiables de entorno 
require('dotenv').config();

const hbs = require('hbs');
const express = require('express')



const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');  
hbs.registerPartials(__dirname+'/views/partials', function(err) {});




//servir contenido estatico
//Ejecuta un html desde la carpeta del public
//Path estatico
app.use(express.static('public'));
//Controlador
app.get('/', (req, res) => {
    res.render('home', {
      nombre: 'Fernando',
      titulo:'Curso de Node'
    });
  })

//cada una es una diferente ruta

//Diferente ruta

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Fernando',
    titulo:'Curso de Node'
  });
})


app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Fernando',
    titulo:'Curso de Node'
  });
})


//Comodin en caso de no encontrar la pagina devulve lo siguiente
app.get('*', (req, res) => {
    //dirname para cualquier subdirectorio
    res.sendFile(__dirname+'/public/404.html');
})

app.listen(port, () =>{

    console.log(`Example app listenung at  http://localhost:${port}`)

})

