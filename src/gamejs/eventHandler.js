class EventHandler {

    constructor() {

        //Mouse Movement
        this.mouseX, this.mouseY;
        canvas.addEventListener("mousemove", e => {
            this.mouseX = e.offsetX;
            this.mouseY = e.offsetY;
        })

        //Mouse Pressed
        this.leftMousePressed = false;
        document.addEventListener("mousedown", e => {
            switch (e.button) {
                case 0:
                    this.leftMousePressed = true;
                    break;
            }
        })
        document.addEventListener("mouseup", e => {
            switch (e.button) {
                case 0:
                    this.leftMousePressed = false;
                    break;
            }
        })
    }

}