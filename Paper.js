class Paper{
 constructor(x,y){
  var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2
  }
 this.body = Bodies.circle(x,y,20,options);        
 this.radius = 20; 
 this.x = x;
 this.y = y;
 World.add(world,this.body)
}

display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    ellipseMode(CENTRE);
    fill(150,50,125)
    ellipse(0,0,this.radius*2,this.radius*2);
    pop();
}
}
  