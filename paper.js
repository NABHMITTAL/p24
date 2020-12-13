class Paper{
    constructor(x,y){
        var opt = {
           isStatic : false,
            restitution : 0.8,
            friction : 0.5,
            density  : 1.2
        }
        this.body = Matter.Bodies.circle(x,y,10,opt)
        World.add(world,this.body)
    }
    display(){
        Push()
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(CENTRE)
        fill("white")
        ellipse(0,0,this.diameter)
        pop()
    }
}