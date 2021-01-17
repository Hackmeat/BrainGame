class DroppingElement {

    constructor(x, y, objectID, colorID, speed) {
        this.x = x;
        this.y = y;
        this.objectID = objectID;
        this.colorID = colorID;
        this.speed = speed / 5;

        this.lastY;
        this.arrived = false;

        this.squareGreen = document.getElementById("SquareGreen");
    }

    draw(ctx, interpolationPercentage) {
        let y = this.lastY + (this.y - this.lastY) * interpolationPercentage;
        switch (this.colorID) {
            case 1:
                ctx.fillStyle = "#ff0000";
                break;
            case 2:
                ctx.fillStyle = "#0000ff";
                break;
            case 3:
                ctx.fillStyle = "#ff00ff";
                break;
            case 4:
                ctx.fillStyle = "#ffff00";
                break;
            case 5:
                ctx.fillStyle = "#00ffff";
                break;
            case 6:
                ctx.fillStyle = "#00ff00";
                break;
        }
        /*
                switch (this.objectID) {
                    case 1:
                        switch (this.colorID) {
                            case 1:
                                //o1 c1
                                break;
                            case 2:
                                //o1 c2
                                break;
                            case 3:
                                //o1 c3
                                break;
                            case 4:
                                //o1 c4
                                break;
                            case 5:
                                //o1 c5
                                break;
                            case 6:
                                //o2 c6
                                break;
                        }
                        break;
                    case 2:
                        switch (this.colorID) {
                            case 1:
                                //o2 c1
                                break;
                            case 2:
                                //o2 c2
                                break;
                            case 3:
                                //o2 c3
                                break;
                            case 4:
                                //o2 c4
                                break;
                            case 5:
                                //o2 c5
                                break;
                            case 6:
                                //o2 c6
                                break;
                        }
                        break;
                    case 3:
                        switch (this.colorID) {
                            case 1:
                                //o3 c1
                                break;
                            case 2:
                                //o3 c2
                                break;
                            case 3:
                                //o3 c3
                                break;
                            case 4:
                                //o3 c4
                                break;
                            case 5:
                                //o3 c5
                                break;
                            case 6:
                                //o3 c6
                                break;
                        }
                        break;
                    case 4:
                        switch (this.colorID) {
                            case 1:
                                //o4 c1
                                break;
                            case 2:
                                //o4 c2
                                break;
                            case 3:
                                //o4 c3
                                break;
                            case 4:
                                //o4 c4
                                break;
                            case 5:
                                //o4 c5
                                break;
                            case 6:
                                //o4 c6
                                break;
                        }
                        break;
                    case 5:
                        switch (this.colorID) {
                            case 1:
                                //o5 c1
                                break;
                            case 2:
                                //o5 c2
                                break;
                            case 3:
                                //o5 c3
                                break;
                            case 4:
                                //o5 c4
                                break;
                            case 5:
                                //o5 c5
                                break;
                            case 6:
                                //o5 c6
                                break;
                        }
                        break;
                    case 6:
                        switch (this.colorID) {
                            case 1:
                                //o6 c1
                                break;
                            case 2:
                                //o6 c2
                                break;
                            case 3:
                                //o6 c3
                                break;
                            case 4:
                                //o6 c4
                                break;
                            case 5:
                                //o6 c5
                                break;
                            case 6:
                                //o6 c6
                                break;
                        }
                        break;
                }
        */

        //ctx.fillRect(this.x, y, this.objectID * 5, this.objectID * 5);
        ctx.drawImage(this.squareGreen, this.x, y);
    }

    update(delta) {
        this.lastY = this.y;
        this.y += this.speed * delta;
        if (this.y > 1100) {
            this.y = 1100;
            this.arrived = true;
        }
    }
}