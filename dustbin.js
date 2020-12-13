class Bin{
    constructor(x,y,w,h){
        this.height = h
        this.width = w
        var opt = {
            restitution:0,
            isStatic:false
        }
        this.Body = Matter.Bodies.rectangle(x,y,w,h,opt)
        World.add(this.body)
    }
    show(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}