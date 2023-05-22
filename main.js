//variáveis globais



//pré-carregamento
function preload(){


}

//criando objetos e suas propriedades
function setup() {
  createCanvas(400,400);
  bola = createSprite(200, 200, 20, 20)
  bola.shapeColor = "black"
  
  

}


function draw() {
  background(200);
  if (keyDown("up")){
    bola.y -= 5
    background ("blue")
  }
  if (keyDown("down")){
    bola.y -= 5
    background ("yellow")
  }
  
  if (keyDown("righ")){
    bola.y -= 5
    background ("black")
  }
  if (keyDown("left")){
    bola.y -= 5
    background ("green")
  }
  
   

      
  
  

  drawSprites();
}