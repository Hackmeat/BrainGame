let canvas = document.getElementById("gameScreen")
let ctx = canvas.getContext("2d")

const GAME_WIDTH = 1920;
const GAME_HEIGHT = 1080;

let lastTime = 0;

let eventHandler = new EventHandler();
let start = new Start(GAME_WIDTH, GAME_HEIGHT, eventHandler);
let gameScreen = new GameScreen(GAME_WIDTH, GAME_HEIGHT);
let elementSelection = new ElementSelection(GAME_WIDTH, GAME_HEIGHT, eventHandler, gameScreen);
let gameOverlay = new GameOverlay(GAME_WIDTH, GAME_HEIGHT, elementSelection, gameScreen)
let gameHandler = new GameHandler(GAME_WIDTH, GAME_HEIGHT, start, eventHandler, gameScreen, elementSelection, gameOverlay);




function update(delta) {
    gameHandler.update(delta);

    if (elementSelection.gameOver) {
        gameScreen = new GameScreen(GAME_WIDTH, GAME_HEIGHT);
        elementSelection = new ElementSelection(GAME_WIDTH, GAME_HEIGHT, eventHandler, gameScreen);
        gameHandler = new GameHandler(GAME_WIDTH, GAME_HEIGHT, start, eventHandler, gameScreen, elementSelection);
        gameOverlay = new GameOverlay(GAME_WIDTH, GAME_HEIGHT, elementSelection, gameScreen)
    }
    if (elementSelection.nextRound) {
        gameScreen = new GameScreen(GAME_WIDTH, GAME_HEIGHT);
        elementSelection = new ElementSelection(GAME_WIDTH, GAME_HEIGHT, eventHandler, gameScreen);
        gameHandler = new GameHandler(GAME_WIDTH, GAME_HEIGHT, start, eventHandler, gameScreen, elementSelection);
        gameOverlay.gameScreen = gameScreen;
        gameOverlay.elementSelection = elementSelection;
        gameOverlay.update(delta);
    }

}

function draw(interpolationPercentage) {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    gameHandler.draw(ctx, interpolationPercentage);

    gameOverlay.draw(ctx, interpolationPercentage);
}

function end(fps, panic) {
    //fpsCounter.textContent = Math.round(fps) + ' FPS';
    if (panic) {
        var discardedTime = Math.round(MainLoop.resetFrameDelta());
        console.warn('Main loop panicked, probably because the browser tab was put in the background. Discarding ' + discardedTime + 'ms');
    }
}

MainLoop.setUpdate(update).setDraw(draw).setEnd(end).start();