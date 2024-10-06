import {makeAutoObservable} from "mobx";

class CanvasState {
    canvas: HTMLCanvasElement | null = null
    actionsList: string[] = []
    canceledActionsList: string[] = []

    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas
    }

    pushToActionsList(action: string) {
        this.actionsList.push(action)
    }

    pushToCanceledActionsList(action: string) {
        this.canceledActionsList.push(action)
    }
}

export default new CanvasState()