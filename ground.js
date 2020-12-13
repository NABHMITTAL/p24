class Ground{
    constructor(){
        var opt = {
            restitution:0,
            isStatic:true
        }
        this.Body = Matter.Bodies.rectangle(400,670,800,10,opt)
        World.add(this.body)
    }
    show(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}