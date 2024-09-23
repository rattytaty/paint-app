import {Tool} from "./Tool.ts";
import { MouseEvent } from 'react'


export class Brush extends Tool {

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.listen()
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)

    }

    mouseDownHandler(event) {
        this.isMouseDown = true
        this.context.beginPath()
    }

    mouseMoveHandler(event) {
        if (this.isMouseDown) {
            this.draw(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop)
        }
    }

    mouseUpHandler(event) {
        this.isMouseDown = false
    }

    draw(x: number, y: number, w:number, h:number) {

    }
}
