export class Tool {

    canvas: HTMLCanvasElement
    context:CanvasRenderingContext2D
    isMouseDown:boolean

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.context = canvas.getContext("2d")
       //this.destroyEvents()
    }
    destroyEvents(){
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
        this.canvas.onmousemove = null
    }
}