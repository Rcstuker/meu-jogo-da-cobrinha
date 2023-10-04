var cobrinha
var maca
var macaImg
var len = 20


function preload() {
  macaImg = loadImage("maca.gif")
}
function setup() {
  createCanvas(450, 450)
  cobrinha = new Cobrinha(width/2, height/2 ,len)

}
function draw() {
  background(200)
  cobrinha.show()
  
}

