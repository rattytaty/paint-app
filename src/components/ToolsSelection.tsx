import {Box, Icon, IconButton} from "@chakra-ui/react";
import Pencil from "../assets/pencil.svg?react"
import Rectangle from "../assets/rectangle.svg?react"
import {useEffect} from "react";
import canvasState from "../store/CanvasState.ts";
import toolState from "../store/ToolState.ts";
import {ToolSettings} from "./ToolSettings.tsx";

export const ToolsSelection = () => {





    return <Box position="absolute" zIndex={999}>
        <IconButton size="sm"
                    aria-label="Pencil"
                    icon={<Icon boxSize={4}>
                        <Pencil/>
                    </Icon>}/>
        <IconButton size="sm"
                    aria-label="Rectangle"
                    icon={<Icon boxSize={5}>
                        <Rectangle/>
                    </Icon>}/>
<ToolSettings/>
    </Box>;
};
