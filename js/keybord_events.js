export function shortcuts(e) {

    if(e.altKey && e.key==='a')
        alert("Keybord shortcut")
    if(e.altKey && e.key==='p')
        prompt("Keybord shortcut")
    if(e.altKey && e.key==='c')
        confirm("keybord shortcut")
    
}

let y=0,
    x=0;
export function moveBall(e,ball,stage){
    const $ball = $('.ball'),
        $stage = $('.stage'),
        limitBall = $ball.get(0).getBoundingClientRect(),
        limitStage = $stage.get(0).getBoundingClientRect();

    if (e.key==='ArrowUp' &&
    limitBall.top>limitStage.top) {
        e.preventDefault();
        y--;
    }
    if (e.key==='ArrowDown' &&
        limitBall.bottom<limitStage.bottom) {
        e.preventDefault();
        y++;
    }
    if (e.key==='ArrowLeft'&&
        limitBall.left>limitStage.left) {
        e.preventDefault();
        x--;
    }
    if (e.key==='ArrowRight'&&
        limitBall.right<limitStage.right) {
        e.preventDefault();
        x++;
    }
    $ball.css('transform',`translate(${x*10}px,${y*10}px)`)
}