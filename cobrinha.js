class Cobrinha {
    contructor(x,y,len) {
        this.posi = createVector(x,y)
        this.direction = createVector(1,0)
        this.speed = createVector(len)
        this.len = len
    }
        show () {
        rect(this.posi.x,this.posi.y,this.len)
        
    }
}