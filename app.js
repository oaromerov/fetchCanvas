
var canvas = document.getElementById('defaultCanvas0');
var divRespuesta = document.getElementById('respuesta');

function setup() {
    resizeCanvas(400, 400);
    area = document.getElementById('areaCanvas');
    area.appendChild(canvas);    
    canvas.addEventListener('click', event => tratarTablero(event.clientX, event.clientY));
}

function tratarTablero(x, y){
    console.log('me diste un click en ' + x + ", "+ y);
    var datos = new FormData();

    datos.append('posX', mouseX);
    datos.append('posY', mouseY);
    datos.append('valor', 'H');

    enviarInfo(datos)
    .then(resultado => {
        console.log("RESULTADO:");
        console.log(resultado);
        divRespuesta.innerHTML = `
                <div class="alert alert-primary" role="alert">
                    ${resultado.estado}<br> 
                    ${resultado.x}<br>
                    ${resultado.y}<br>
                    ${resultado.valor}<br>
                </div>
            `;
    })
    .catch(err => {
        console.error("MiERROR: " + err);
        divRespuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${err} 
                </div>
            `;
    });
}

async function enviarInfo(datosEnviados){
    respuesta = await fetch('post.php',{
        method: 'POST',
        body: datosEnviados,
        mode: "cors"
    });

    recibe = await respuesta.json(); // sé que recibo un json
    return recibe;
}

function draw() {
    background(153);
    if (mouseIsPressed) {        
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}
