canvas = document.getElementById("mapita"); //invocar por elemento se hace mediante document
papel= canvas.getContext("2d");

//carga de mapa

Mapa={ url: "tile.png", cargaOk: false}


Mapa.imagen = new Image() ; //creamos variableClase, mediante la ley del punto.
Mapa.imagen.src = Mapa.url // Invocamos el atributo de la variable clase src(ruta de imagen) 
Mapa.imagen.addEventListener("load", cargarMapa);  //evento se aplica a la variable clase

function cargarMapa()
{
    Mapa.cargaOk= true // el mapa esta cargado, ahora se puede dibujar.
    DIBUJAR()  //invocamos la funcion dibujar, para que pueda haber conexion con la funcion cargar.
}
// fin de carga del mapa


//inicio carga pollo//

pollo= {url: "pollo.png", cargaOK: false}

pollo.imagen= new Image() //creamos nueva variable contenedor
pollo.imagen.src= pollo.url
pollo.imagen.addEventListener("load", cargarPollo)

function cargarPollo()
{
    
    pollo.cargaOk= true
    DIBUJAR()
   

}

// inicio carga vaca//

vaca= {url: "vaca.png", cargaOK: false}

vaca.imagen= new Image() //creamos nueva variable contenedor
vaca.imagen.src= vaca.url
vaca.imagen.addEventListener("load", cargarVaca)

function cargarVaca()
{
    
    vaca.cargaOk= true
    DIBUJAR()
   

}
// fin carga vaca//

//inicio carga cerdo//


cerdo= {url: "cerdo.png", cargaOK: false}

cerdo.imagen= new Image() //creamos nueva variable contenedor
cerdo.imagen.src= cerdo.url
cerdo.imagen.addEventListener("load", cargarCerdo)

function cargarCerdo()
{
    
    cerdo.cargaOk= true
    DIBUJAR()
   

}

//fin carga cerdo

//inicio de funcion que dibuja las imagenes cargadas previamente en el orden
function DIBUJAR()
{
    
    
    if (Mapa.cargaOk)
        {
            
            papel.drawImage(Mapa.imagen, 0,0)
        }

   if (pollo.cargaOk)

        {   
            
            x= aleatorio(420,100)
             y= aleatorio(0,420)
                
            papel.drawImage(pollo.imagen, x, y )
            
            
        }

    if (vaca.cargaOk)

    {   r= aleatorio(12,420)
        l= aleatorio(0,420)
         papel.drawImage(vaca.imagen,r, l )

        
    }
    
    if (cerdo.cargaOk)
    {   x= aleatorio(2,420)
        y= aleatorio(20,420)
       papel.drawImage(cerdo.imagen,x, y )

        
    }    
}


//funciones matematicas de numeros aleatorios//

function aleatorio(min, max)
{
    x= Math.floor(Math.random()*(max-min+1))+min
    return x
}



// inicio de creacion del evento de mover el cerdo//

//detectar flechas para movimiento

document.addEventListener("keyup", Tecla)


function Tecla (info)
{
    movimiento= 5

    if(info.keyCode==move.UP)
    {
        console.log("oprimiste la flecha para arriba")
        mover()
    }

    else if (info.keyCode==move.DOWN)
    {
        console.log("oprimiste flecha abajo")
    }

    else if (info.keyCode==move.LEFT)
    {
        console.log("oprimiste flecha IZQU")
    }

    else if (info.keyCode==move.RIGHT)
    {
        console.log("oprimiste flecha DERECH")
    
    }

    else{ console.log("otra tecla")}
}

move={UP:38, DOWN: 40, RIGHT: 39, LEFT: 37}

// funcion que realiza el movimiento //


function mover( xInicial, yInicial, xFinal, yFinal, papel) //codigo para dibujar linea
{
papel.beginPath()
vaca.imagen.moveTo(xInicial,yInicial);
vaca.imagen.papel.lineTo(xFinal,yFinal);
papel.stroke();
papel.closePath();
}

