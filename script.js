import Ball from './ball.js';
const ball=new Ball(document.getElementById("ball"));
let lasttime
function update(time) {
    
    if(lasttime!=null)
    {
        const delta=time - lasttime;
    ball.update(delta);
    }
    lasttime=time;
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);