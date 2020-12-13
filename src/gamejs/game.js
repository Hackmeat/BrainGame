class Game {

    constructor() {
        this.x = 10;
        this.y = 10;
        this.lastX, this.lastY;
        this.size = 10;
        this.speed = 0.05;
    }

    draw(ctx, interpolationPercentage) {
        ctx.fillStyle = "#00ff00";

        let x = this.lastX + (this.x - this.lastX) * interpolationPercentage;

        ctx.fillRect(x, this.y, 10, 10);
    }

    update(delta) {
        this.lastX = this.x;
        this.x += this.speed * delta;
    }

}