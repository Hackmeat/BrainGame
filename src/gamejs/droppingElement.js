class DroppingElement {

    constructor(x, y, objectID, colorID, speed) {
        this.x = x;
        this.y = y;
        this.objectID = objectID;
        this.colorID = colorID;
        this.speed = speed / 5;

        this.lastY;
        this.arrived = false;

        this.element = "";
        this.elementSet = false;

        this.squareGreen = document.getElementById("SquareGreen");
    }

    draw(ctx, interpolationPercentage) {
        let y = this.lastY + (this.y - this.lastY) * interpolationPercentage;

        if (!this.elementSet) {
            switch (this.objectID) {
                case 1:
                    this.element += "Cube_";
                    break;
                case 2:
                    this.element += "Cross_";
                    break;
                case 3:
                    this.element += "Pyramid_";
                    break;
                case 4:
                    this.element += "Ball_";
                    break;
            }
            switch (this.colorID) {
                case 1:
                    this.element += "Blue";
                    break;
                case 2:
                    this.element += "Yellow";
                    break;
                case 3:
                    this.element += "Green";
                    break;
                case 4:
                    this.element += "Purple";
                    break;
                case 5:
                    this.element += "Red";
                    break;
            }
        }
        this.elementSet = true;
        console.log(this.element)
        ctx.drawImage(document.getElementById(this.element), this.x, y, 75, 75);

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
        //ctx.drawImage(this.squareGreen, this.x, y);
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