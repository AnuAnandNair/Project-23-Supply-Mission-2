class box{
    constructor(){
        this.width=200;
        this.height=20;
    }

    display(){
        var pos=this.body.position;
        fill("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}