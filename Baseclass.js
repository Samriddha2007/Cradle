
class Baseclass
{
    constructor(x,y,height)
   {
      var options = 
      {
          
          'restitution' : 1,
          'friction': 0.5,
          'density':1.2,
          'area': 4000,
          mass:55000
      }
      this.body = Bodies.rectangle(x,y,70,height,options);
      this.radius = 150;
      this.height = height;
     
      World.add(world,this.body);
      
   }
   display()
   {
    var pos = this.body.position;
    ellipseMode(CENTER);
    //translate(pos.x, pos.y);
    fill("red");
    ellipse(pos.x,pos.y,this.radius,this.height);
   }
}


