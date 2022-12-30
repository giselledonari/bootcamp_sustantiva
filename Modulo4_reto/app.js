class Canvas{
    constructor(width,height){
        this.width=width;
        this.height=height;
        this.lienzo=document.createElement("div");
        this.boton=document.createElement("button");
        

        this.lienzo.style=`width:${this.width}px; height:${this.height}px; border:2px dashed red; margin-bottom:10px`;
        this.lienzo.id="lienzo"
        this.boton.id="boton"
        this.boton.append(document.createTextNode("DIBUJAR"))
        
        document.body.append(this.lienzo)
        document.body.append(this.boton)
    }

    dibujar(figura){
        
        let widthFigura=parseInt(figura.style.width);
        let heightFigura=parseInt(figura.style.height);
     
        let randomX=Math.floor(Math.random()*(this.width-widthFigura));
        let randomY=Math.floor(Math.random()*(this.height-heightFigura));
        
        figura.style.cssText+=`position:absolute; margin-left:${randomX}px; margin-top:${randomY}px`;
        document.querySelector("#lienzo").append(figura);
    }
    
}

class Rectangulo{
    constructor(){
        this.figura=document.createElement("div");
        this.figura.style=`width:50px; height:25px; background-color:black`;
    }
}

//bonus
class Circulo{
    constructor(){
        this.figura=document.createElement("div");
        this.figura.style=`width:50px; height:50px; border-radius:50%; background-color:green`;
    }
}

let canva=new Canvas(400,300)
const dibujar=document.querySelector("#boton");
dibujar.addEventListener("click",()=>{
    //crear la clase que dibuja
    console.log("dibujando")
    let rectangulo1=new Rectangulo();
    canva.dibujar(rectangulo1.figura);
})