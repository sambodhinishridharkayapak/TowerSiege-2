class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.image = loadImage("block.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      //console.log(this.body.speed);
      var pos= this.body.position;

      if(this.body.speed<2.18)
      {
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
      }
      else
      {
             
              push()
              World.remove(world, this.body)

              this.visibility=this.visibility-0.05;
              tint(255,this.visibility);
              image(this.image,pos.x,pos.y,this.width, this.height);
              pop()
              
      }
      
      
    }
}