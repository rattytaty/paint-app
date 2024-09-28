import {
    Box,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import toolState from "../store/ToolState.ts";

export const ToolSettings = () => {
    const [lineWidth, setLineWidth] = useState(1)

    useEffect(() => {
        toolState.setLineWidth(lineWidth)
    }, [lineWidth]);

    return <Box>

        <NumberInput onChange={(_, valueAsNumber) => setLineWidth(valueAsNumber)} size="xs" maxW={16}
                     value={lineWidth} min={1}>
            <NumberInputField/>
            <NumberInputStepper>
                <NumberIncrementStepper/>
                <NumberDecrementStepper/>
            </NumberInputStepper>
        </NumberInput>

    </Box>
};
