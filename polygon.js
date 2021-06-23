class Polygon  {
  constructor(x,y,width,height)  {
      var options={
          isStatic:false
      }
      this.width = width
      this.height = height
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.image = loadImage("polygon.png")

      World.add(world,this.body)

  }
  display()  {
  
   push();
   var angle = this.body.angle;
   imageMode(CENTER)
   image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
   pop();
  }
}