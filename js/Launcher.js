class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 50
        }

        this.pointB = pointB;
        this.body1 = Matter.Constraint.create(options);
        Matter.World.add(world, this.body1)
    }

    fly(){
        this.body1.bodyA = null;
    }

    attach(bodyA){
        this.body1.bodyA = bodyA;
    }

    display(){
        if(this.body1.bodyA != null){
        var bA = this.body1.bodyA.position;
        var pB = this.pointB;
        strokeWeight(4);
        line(bA.x, bA.y, pB.x, pB.y);
        }

    }
}