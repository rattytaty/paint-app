import {useEffect, useState} from "react";

const Canvas = () => {

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


    return <canvas style={{width: "98vw", height: "99vh", border: "1px solid black"}}
    ></canvas>
};

export default Canvas;