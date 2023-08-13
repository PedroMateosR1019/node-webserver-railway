const http = require('http');
http.createServer((req,res) =>{
    //console.log(req);

    //Archivo de texto text/plain
    //res.writeHead(200, {'Content-type': 'text/plain'})
    //Para archivo JSON application/json
    //res.writeHead(200, {'Content-type': 'application/json'})
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    //res.writeHead(200, {'Content-type': 'application/csv'})
  
    //res.write('id, nombre\n');
    //res.write('1, Fernando\n');
    //res.write('2, Maria\n');
    //res.write('3, Juan\n');
    //res.write('4, Pedro\n');


    res.write('Hola mundo');
    res.end();

})
.listen( 8080 );
console.log('Escuchando el puesto',8080);