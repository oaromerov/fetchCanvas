
var canvas = document.getElementById('defaultCanvas0');
var respuesta = document.getElementById('respuesta');

function setup() {
    resizeCanvas(400, 400);
    area = document.getElementById('areaCanvas');
    area.appendChild(canvas);
}

function draw() {
    background(153);
    if (mouseIsPressed) {
        capturarCoordenada(mouseX, mouseY);
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}

function capturarCoordenada(mouseX, mouseY){
    
    console.log('me diste un click en ' + mouseX + ", "+ mouseY);
    var datos = new FormData();

    datos.append('posX', mouseX);
    datos.append('posY', mouseY);
    datos.append('valor', 'x');

    fetch('post.php',{
        method: 'POST',
        body: datos,
        mode: "cors"
    })
    .then(response => {
        if(response.ok){                
            console.log("RESPONSE");
            console.log(response);
            response.json();
        }else{
            respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Error en la llamada Ajax 
                </div>
            `;
            throw "Error en la llamada Ajax";
            }            
    })
    .then(data => {
        console.log("DATA");
        console.log(data);  
        if(data){
            if(data.estado === 'error'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Click 
                </div>
                `
            }else{
                respuesta.innerHTML = `
                <div class="alert alert-primary" role="alert">                   
                ${data.x}<br>${data.y}<br>${data.valor}
                    </div>
                `
            }
        }else{
            respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">                   
                No estan llegando los datos!
                    </div>
                `
        }
        
    })
    .catch(err => {
        console.log(err);
     });
}
