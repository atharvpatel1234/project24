class Ground{
    constructor(x,y,width,height){
     var options={
         isStatic:true,
         friction:0.5,
         density:1.5
     }
    this.body = Bodies.rectangle(x,y,width,height,options);        
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    World.add(world,this.body)
   }
   
   display(){
      rectMode(CENTRE);
      fill("brown")
      rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
    
    
    push();
       translate(this.body.position.x,this.body.position.y);
       fill("brown")
       rectMode(CENTRE);
       rect(0,0,this.width,this.height);
       pop();
   }
   }
     