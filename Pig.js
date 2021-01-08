class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  
    this.visible=255;
  }
   display(){
   console.log(this.body.speed)
   if(this.body.speed>4){
    push()
    this.visible=this.visible-5;
     tint(255,this.visible)
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height) 
    pop()
    World.remove(world,this.body)

   }
   else  { super.display()
  }

   
  
  
  }


   }     
