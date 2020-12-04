class Mango {

    constructor(x,y,diameter) {

        var options = {
            
            isStatic:true,
           restitution:0

        }
       this.image = loadImage("mango.png");
       this.x = x;
       this.y = y;
       this.diameter = diameter;
       this.body = Bodies.circle(this.x,this.y,this.diameter/2,options); 

        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        //rectMode(CENTER);
        image(this.image,0,0,this.diameter,this.diameter);
        ellipseMode(CENTER);
        pop();

    }

}