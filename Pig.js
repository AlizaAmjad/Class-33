class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.alpha=255
  }
  display(){
    if(this.body.speed<3){
      super.display()
    }else{
      World.remove(world, this.body);
      push()
      this.alpha=this.alpha-5
      tint(255,this.alpha)
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop()
    }
  }

Score() {
  if(this.alpha < 0 && this.alpha >- 1005) {
    score= score + 1
  }
}
};