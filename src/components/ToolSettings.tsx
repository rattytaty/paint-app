import {
    Box,
    Button,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import toolState from "../store/ToolState.ts";
import ToolState from "../store/ToolState.ts";
import {ColorInput} from "./ColorInput.tsx";


export const ToolSettings = () => {
    const [lineWidth, setLineWidth] = useState(1)
    const [fillColor, setFillColor] = useState("#000000")
    const [strokeColor, setStrokeColor] = useState("#000000")

    useEffect(() => {
        if (ToolState.tool) {
            toolState.setLineWidth(lineWidth)
        }
    }, [lineWidth]);
    useEffect(() => {
        if (ToolState.tool) {
            toolState.setStrokeStyle(strokeColor)
        }
    }, [strokeColor]);
    useEffect(() => {
        if (ToolState.tool) {
            toolState.setFillColor(fillColor)
        }
    }, [fillColor]);


    return <Box>

        <NumberInput onChange={(_, valueAsNumber) => setLineWidth(valueAsNumber)}
                     size="xs"
                     maxW={16}
                     value={lineWidth}
                     min={1}>
            <NumberInputField/>
            <NumberInputStepper>
                <NumberIncrementStepper/>
                <NumberDecrementStepper/>
            </NumberInputStepper>
        </NumberInput>
        <ColorInput inputValue={fillColor}
                    onInputChange={setFillColor}
                    valueName="Fill"/>
        <ColorInput inputValue={strokeColor}
                    onInputChange={setStrokeColor}
                    valueName="Outline"/>
    </Box>
};
