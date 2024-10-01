import {Box, Icon, IconButton} from "@chakra-ui/react";
import PencilSVG from "../assets/pencil.svg?react"
import RectangleSVG from "../assets/rectangle.svg?react"
import CircleSVG from "../assets/circle.svg?react"
import ActionArrowSVG from "../assets/actionArrow.svg?react"
import ArrowSVG from "../assets/arrow.svg?react"
import {ToolSettings} from "./ToolSettings.tsx";
import toolState from "../store/ToolState.ts";
import {Pencil} from "../tools/Pencil.ts";
import CanvasState from "../store/CanvasState.ts";
import {Rectangle} from "../tools/Rectangle.ts";

export const ToolsSelection = () => {


    return <Box position="absolute" zIndex={999}>
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
            aria-label="Circle"
            icon={<Icon boxSize={5}>
                <ArrowSVG/>
            </Icon>}/>

        <ToolSettings/>
    </Box>;
};
