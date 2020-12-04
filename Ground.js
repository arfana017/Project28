class Ground {
    constructor(x,y,width,length) {

        var options = {
    
            isStatic:true,
            friction:0.5,
            density:1.2
    
        }
    
        this.x = x;
        this.y = y;
        this.width = width;
        this.length = length;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.length,options)
    
        World.add(world, this.body);
    
    }
    
    display() {
    
        var pos = this.body.postion;
        push();
        rectMode(CENTER);
        fill("gray");
        rect(this.x,this.y,this.width,this.length);
        pop();
    
    }
    
}