class Ground{
    constructor(x,y,width,height){
        var options ={
            isStatic : true,
            restitution : 0.3,
            //friction : 0.4,
        }
        
        this.body = Bodies.rectangle(x,y,options);
        this.width = width;
        this.height = height;
        fill ("blue");
        
        
    }

    display(){
        
       
        var pos = this.body.position
        rect(pos.x,pos.y,this.width,this.height);
        
    
        
    }



};