const Initial_velocity = 0.025;
const Velocity_Inc=0.000003;
export default class Ball{
constructor(ballelem)
{
    this.ballelem=ballelem;
this.reset();
}

get x()
{
    return parseFloat(getComputedStyle(this.ballelem).getPropertyValue("--x"))
}

set x(value)
{
    this.ballelem.style.setProperty("--x",value);
}

get y()
{
    return parseFloat(getComputedStyle(this.ballelem).getPropertyValue("--y"))
}

set y(value)
{
    this.ballelem.style.setProperty("--y",value);
}

rect()
{
    return this.ballelem.getBoundingClientRect();
}

reset()
{
    this.x=50;
    this.y=50;
    this.direction = {x:0}
while(Math.abs(this.direction.x)<=0.2 || Math.abs(this.direction.y)>=0.9)
{
    const heading= randomnumbetween(0,2*Math.PI)
    this.direction={x:Math.cos(heading),y:Math.sin(heading)}
}
this.velocity=Initial_velocity;
}

update(delta,paddleRect)
{
    this.x +=this.direction.x*this.velocity*delta ;
this.y+=this.direction.y*this.velocity*delta;
this.velocity += Velocity_Inc*delta;
const rect = this.rect();
if(rect.bottom >= window.innerHeight || rect.top<=0)
{
    this.direction.y*=-1;
}
if(paddleRect.some(r=> isCollision(r,rect)))
{
    this.direction.x*=-1;
}
}

}
function isCollision(rect1,rect2)
{
    return (rect1.left<=rect2.right && rect1.right>=rect2.left && rect1.top<=rect2.bottom && rect1.bottom>=rect2.top);
}
function randomnumbetween(min,max)
{
    return Math.random()*(max-min)+min;
}