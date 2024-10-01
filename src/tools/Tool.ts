export class Tool {

    canvas: HTMLCanvasElement
    context:CanvasRenderingContext2D
    isMouseDown:boolean

    constructor(canvas: HTMLCanvasElement) {
        this.isMouseDown=false
        this.canvas = canvas
        this.context = canvas.getContext("2d")!
       this.destroyEvents()
    }

    set fillColor(color:string){
        this.context.fillStyle = color
    }

    set strokeStyle(color:string){
        this.context.strokeStyle = color
    }
    set lineWidth(width:number){
        this.context.lineWidth = width
    }

    destroyEvents(){
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
        this.canvas.onmousemove = null
    }
}