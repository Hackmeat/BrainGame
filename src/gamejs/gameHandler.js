class GameHandler {

    constructor(gameWidth, gameHeight, start, eventHandler, gameScreen, elementSelection) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.start = start;
        this.eventHandler = eventHandler;
        this.gameScreen = gameScreen;
        this.elementSelection = elementSelection;
    }

    draw(ctx, interpolationPercentage) {
        if (!this.start.gameRunning) {
            this.start.draw(ctx, interpolationPercentage);
        } else if (!this.gameScreen.allArrived) {
            this.gameScreen.draw(ctx, interpolationPercentage);
        } else {
            this.elementSelection.draw(ctx, interpolationPercentage)
        }
    }

    update(delta) {
        if (!this.start.gameRunning) {
            this.start.update(delta);
        } else if (!this.gameScreen.allArrived) {
            this.gameScreen.update(delta);
        } else {
            this.elementSelection.update(delta);
        }
    }

}