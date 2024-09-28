import {useEffect, useState} from "react";

export const useWindowSize = ()=>{

    const [windowSize, setWindowSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        const updateSizes = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", updateSizes);
        return () => window.removeEventListener("resize", updateSizes)
    }, []);

    return windowSize
}