import Ball from './ball.js';
import Paddle from './paddle.js';
const ball=new Ball(document.getElementById("ball"));
const playerPaddle=new Paddle(document.getElementById("player-paddle"));
const computerPaddle=new Paddle(document.getElementById("computer-paddle"));
const playerScoreelement=document.getElementById("player-score");
const computerScoreelement=document.getElementById("computer-score");
let lasttime
function update(time,) {

    
    if(lasttime!=null)
    {
        const delta=time - lasttime;
        const hue=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"));
        document.documentElement.style.setProperty("--hue",hue+delta*.01);
    
        ball.update(delta,[playerPaddle.rect(),computerPaddle.rect()]);
  computerPaddle.update(delta,ball.y); 
if (isLose())
handleLose(); }
    lasttime=time;
    window.requestAnimationFrame(update);
}
document.addEventListener("mousemove",e=>{
    playerPaddle.position=(e.y/window.innerHeight)*100;
})
function isLose()
{
    const rect=ball.rect();
    return rect.right>=window.innerWidth || rect.left <=0;
}
function handleLose()
{const rect=ball.rect();
    if(rect.right>=window.innerHeight)
    playerScoreelement.textContent=parseInt(playerScoreelement.textContent)+1;
    else
    computerScoreelement.textContent=parseInt(computerScoreelement.textContent)+1;
    ball.reset();
    computerPaddle.reset();

}

window.requestAnimationFrame(update);