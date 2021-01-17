class ElementSelection {

    constructor(gameWidth, gameHeight, eventHandler, gameScreen) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.eventHandler = eventHandler;
        this.gameScreen = gameScreen;

        this.clickOne = false;
        this.clickTwo = false;
        this.gameOver = false;
        this.allCorrect = false;
        this.nextRound = false;

        this.objectCompareID, this.colorCompareID;

        this.selectionArray = [];
    }

    draw(ctx, interpolationPercentage) {
        this.drawSelectionTab(ctx, this.gameWidth / 2, this.gameHeight / 2, 6);
        this.drawSelectionTab(ctx, this.gameWidth / 2, this.gameHeight / 2 + 200, 6);
        this.drawSelectionTab(ctx, this.gameWidth / 2, this.gameHeight / 2 - 300, this.gameScreen.elementArray.length);
    }

    update(delta) {
        if (!this.clickOne) {
            this.hoverDetectionSelectionTab(this.gameWidth / 2, this.gameHeight / 2, 6);
        } else if (!this.clickTwo) {
            this.hoverDetectionSelectionTab(this.gameWidth / 2, this.gameHeight / 2 + 200, 6);
        } else if (this.objectCompareID > 0 && this.colorCompareID > 0) {
            this.compareID(this.objectCompareID, this.colorCompareID);
        }
    }


    drawSelectionTab(ctx, x, y, amount) {
        let size = 100;
        x -= amount / 2 * size;
        ctx.fillStyle = "#ffffff"

        for (let i = amount; i > 0; i--) {
            ctx.strokeRect(x, y, size, size)
            x += size;
        }
    }

    drawObjectSlection(ctx) {

    }

    hoverDetectionSelectionTab(x, y, amount) {
        let mouseX = this.eventHandler.mouseX;
        let mouseY = this.eventHandler.mouseY;
        let size = 100;
        x -= amount / 2 * size;

        for (let i = amount; i > 0; i--) {
            if (mouseX > x && mouseX < x + size) {
                if (mouseY > y && mouseY < y + size) {
                    if (this.eventHandler.leftMousePressed) {
                        if (!this.clickOne) {
                            this.objectCompareID = i;
                            this.clickOne = true;
                        } else if (!this.clickTwo) {
                            this.colorCompareID = i;
                            this.clickTwo = true;
                        }
                    }
                }
            }
            x += size;
        }
    }

    compareID(objectID, colorID) {
        let found = false;
        for (let i = this.gameScreen.elementArray.length - 1; i > -1; i--) {
            let element = this.gameScreen.elementArray[i];
            if (element.objectID == objectID && element.colorID == colorID) {
                this.gameScreen.elementArray[i] = 0;
                this.clickOne = false;
                this.clickTwo = false;
                i = 0;
                found = true;
                console.log(this.gameScreen.elementArray)
            }
        }
        if (!found) {
            this.gameOver = true;
            console.log("Game Over")
        }
        this.checkAllCorrect();
    }

    checkAllCorrect() {
        this.allCorrect = true;
        for (let i = this.gameScreen.elementArray.length - 1; i > -1; i--) {
            let element = this.gameScreen.elementArray[i];
            if (element != 0) {
                this.allCorrect = false;
            }
        }
        if (this.allCorrect) {
            this.nextRound = true;
            console.log("next Round")
        }
    }
}