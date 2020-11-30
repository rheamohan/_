class Ball {
    constructor (x,y,radius){
        var options ={
            'isStatic' : false,
            'restitution' :1,
            'friction' : 0.5,
            'density' : 1.2
        }

       
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        World.add(world, this.body);
        fill("red");
        
    }

    display(){
        //push ();
    var pos = this.body.position
    ellipseMode(RADIUS);
    circle(pos.x, pos.y, this.radius, this.radius);
   // fill("blue");
    

    }
    
};