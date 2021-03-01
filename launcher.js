class Launcher {
    constructor(a,b)
    {
        var features =
        {
            bodyA:a,
            pointB:b,
            stiffness:0.04,
            length:20 
        }

            this.conection=Constraint.create(features)

            World.add(world,this.conection) 
            console.log(this.conection.pointB) 

        
    }
    display()
    {
       
       if(this.conection.bodyA!=null)
    {
       var a = this.conection.bodyA.position
       var b = this.conection.pointB
       stroke (48,22,8)
       strokeWeight (5) 
       line (a.x,a.y,b.x,b.y)
       
       

    }   
    }
    break(){
       this.conection.bodyA=null 
    }
}