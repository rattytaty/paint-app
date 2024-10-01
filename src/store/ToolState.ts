import {makeAutoObservable} from "mobx";

class ToolState {
    tool = null

    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool) {
        this.tool = tool
    }

    setStrokeStyle(color:string) {
        this.tool.strokeStyle = color
    }

    setFillColor(color:string) {
        this.tool.fillColor = color
    }

    setLineWidth(width: number) {
        this.tool.lineWidth = width
    }


}

export default new ToolState()