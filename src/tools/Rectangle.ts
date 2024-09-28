import {Tool} from "./Tool.ts";


export class Rectangle extends Tool {
    startX:number
    startY:number

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.listen()
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    mouseDownHandler(event: MouseEvent) {
        this.isMouseDown = true
        this.context.beginPath()
        this.startX = event.pageX - event.target.offsetLeft
        this.startY = event.pageY - event.target.offsetTop
        this.saved = this.canvas.toDataURL()
    }

    mouseMoveHandler(event) {
        if (this.isMouseDown) {
            const currentX = event.pageX - event.target.offsetLeft
            const currentY = event.pageY - event.target.offsetTop
            const width = currentX - this.startX
            const height = currentY - this.startY
            this.draw(  this.startX, this.startY,width,height)

        }
    }

    mouseUpHandler(event) {
        this.isMouseDown = false
    }

    draw(x: number, y: number, w: number, h: number) {
        const img = new  Image()
        img.src = this.saved
        img.onload = ()=> {
            this.context.clearRect(0,0, this.canvas.width, this.canvas.height)
            this.context.drawImage(img, 0,0, this.canvas.width, this.canvas.height)
            this.context.beginPath()
            this.context.rect(x, y, w, h)
            this.context.fill()
            this.context.stroke()
        }

    }
}
