import {makeAutoObservable} from "mobx";

class CanvasState {
    canvas: HTMLCanvasElement | null = null
    actionsList :number[]= []
    canceledActionsList:string[] = []

    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas
    }

    pushToActionsList(action:string){}
    pushToCanceledActionsList(action:string){}
}

export default new CanvasState()