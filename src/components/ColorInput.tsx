import {Button} from "@chakra-ui/react";

type ColorInputProps = {
    inputValue:string
    onInputChange:(newInputValue:string)=>void
    valueName:string
}

export const ColorInput =(props:ColorInputProps)=>{

    return <Button size="sm"
                   cursor="auto"
                   rightIcon={<div style={{
                       height: "1.3em",
                       width: "1.3em",
                       overflow: "hidden",
                       borderRadius: "50%",
                       display: "inline-flex",
                       alignItems: "center",
                       position: "relative",
                   }}>
                       <input style={{
                           position: "absolute",
                           cursor: "pointer",
                           height: "3em",
                           width: "3em",
                           top: "50%",
                           left: "50%",
                           transform: "translate(-50%, -50%)",
                           overflow: "hidden",
                           border: "none",
                           margin: 0,
                           padding: 0,
                       }}
                              type="color"
                              value={props.inputValue}
                              onChange={e => props.onInputChange(e.currentTarget.value)}/>
                   </div>}>
        {props.valueName}
    </Button>
}