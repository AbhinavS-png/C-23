class box{
constructor(x,y,w,h){
    var options={
        'restitution': 0.8,
        'friction': 0.1,
        'density': 1
      }
    this.body = Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
    this.width = w;
    this.height = h;
}
//functions
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    //translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    pop();
}

}