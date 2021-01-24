class Plinko{
    constructor(x, y){
        var options={
            restituition: 0.4
        }
        this.r = this.r
        this.body = Bodies.circle(x, y, this.r, options);
        this.body.shapeColor = "white";

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}