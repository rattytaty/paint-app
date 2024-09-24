import {useEffect, useRef, useState} from "react";
import {observer} from "mobx-react-lite";
import canvasState from "../store/CanvasState.ts";
import toolState from "../store/ToolState.ts";
import {Brush} from "../tools/Brush.ts";
import {Rectangle} from "../tools/Rectangle.ts";

export const Canvas = observer(() => {

    const [canvasSize, setCanvasSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        const updateCanvasSize = () => {
            setCanvasSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", updateCanvasSize);
        return () => window.removeEventListener("resize", updateCanvasSize)
    }, []);


    const canvasRef = useRef(null)
    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Rectangle(canvasRef.current))
    }, []);

    return <canvas ref={canvasRef}
                   width={canvasSize.width}
                   height={canvasSize.height}
                   style={{border: "1px solid black"}}
    ></canvas>
});
