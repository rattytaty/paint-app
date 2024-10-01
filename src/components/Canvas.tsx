import {useEffect, useRef} from "react";
import {observer} from "mobx-react-lite";
import canvasState from "../store/CanvasState.ts";
import toolState from "../store/ToolState.ts";
import {useWindowSize} from "../hooks/useWindowSize.tsx";
import {Pencil} from "../tools/Pencil.ts";

export const Canvas = observer(() => {

    const {height, width} = useWindowSize()
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        canvasState.setCanvas(canvasRef.current!)
        toolState.setTool(new Pencil(canvasRef.current!))
    }, []);
   const onMouseDownHandler =()=>{
       canvasState.pushToActionsList(canvasRef.current!.toDataURL())
   }

    return <canvas ref={canvasRef}
                   width={width}
                   height={height}
    onMouseDown={onMouseDownHandler}
    ></canvas>
});
