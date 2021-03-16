const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let url = req.url;

    function page(page) {
        fs.readFile("./resources/" + page, function (error, html) {
            res.write(html);
            res.end();
        
        });
    };
    
    if(url ==='/') {
        page('inicio.html');
    }
    else if(url ==='/clientes'){ 
        page('clientes.html'); 
    }
    else if(url ==='/contacto') { 
        page('contacto.html');
    }
    else if(url ==='/nosotros'){ 
        page('nosotros.html');
    }
    else if(url ==='/servicios'){ 
        page('servicios.html');
    }

});

server.listen(port, hostname, () => {
  console.log(`Corriendo en http://${hostname}:${port}/`);
});