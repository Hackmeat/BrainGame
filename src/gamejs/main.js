let canvas = document.getElementById("gameScreen")
let ctx = canvas.getContext("2d")

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

let lastTime = 0

let game = new Game();


function update(delta) {
    game.update(delta)
}

function draw(interpolationPercentage) {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    game.draw(ctx, interpolationPercentage)
}

function end(fps, panic) {
    //fpsCounter.textContent = Math.round(fps) + ' FPS';
    if (panic) {
        var discardedTime = Math.round(MainLoop.resetFrameDelta());
        console.warn('Main loop panicked, probably because the browser tab was put in the background. Discarding ' + discardedTime + 'ms');
    }
}

MainLoop.setUpdate(update).setDraw(draw).setEnd(end).start();