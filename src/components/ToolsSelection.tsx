import {Box, Icon, IconButton} from "@chakra-ui/react";
import PencilSVG from "../assets/pencil.svg?react"
import RectangleSVG from "../assets/rectangle.svg?react"
import CircleSVG from "../assets/circle.svg?react"
import ArrowSVG from "../assets/arrow.svg?react"
import DownloadSVG from "../assets/download.svg?react"
import {ToolSettings} from "./ToolSettings.tsx";
import toolState from "../store/ToolState.ts";
import {Pencil} from "../tools/Pencil.ts";
import CanvasState from "../store/CanvasState.ts";
import {Rectangle} from "../tools/Rectangle.ts";

export const ToolsSelection = () => {
    return <Box position="absolute" >
        <IconButton onClick={() =>toolState.setTool(new Pencil(CanvasState.canvas!))}
                    size="sm"
                    aria-label="Pencil"
                    icon={<Icon boxSize={4}>
                        <PencilSVG/>
                    </Icon>}/>
        <IconButton onClick={() =>toolState.setTool(new Rectangle(CanvasState.canvas!))}
            size="sm"
            aria-label="Rectangle"
            icon={<Icon boxSize={5}>
                <RectangleSVG/>
            </Icon>}/>
        <IconButton
            size="sm"
            aria-label="Circle"
            icon={<Icon boxSize={5}>
                <CircleSVG/>
            </Icon>}/>

        <IconButton
            size="sm"
            aria-label="Undo"
            icon={<Icon boxSize={5}>
                <ArrowSVG/>
            </Icon>}/>

        <IconButton
            size="sm"
            aria-label="Redo"
            icon={<Icon transform={"scale(-1,1)"} boxSize={5}>
                <ArrowSVG />
            </Icon>}/>

        <IconButton
            size="sm"
            aria-label="Download"
            icon={<Icon boxSize={5}>
                <DownloadSVG />
            </Icon>}/>
        <ToolSettings/>
    </Box>;
};
