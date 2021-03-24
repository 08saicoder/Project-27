class Bob
{
    constructor(x,y,height){
   var options = {
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2
   }

   ground = Bodies.rectangle(200, 390, 20, 20, ground_options);
   World.add(world, ground);
 
   var ball_options = {
     restitution : true
   }
 
   ball = Bodies.circle(200, 100, 20, ball_options);
   World.add(world, ball);

  bobObject1 = new bobObject1(rope1.body, bobObject1.body);
  bobObject2 = new bobObject2(rope2.body, bobObject2.body);
  bobObject3 = new bobObject3(rope3.body, bobObject3.body);
  bobObject4 = new bobObject4(rope4.body, bobObject4.body);
  bobObject5 = new bobObject5(rope5.body, bobObject5.body);
    }
}