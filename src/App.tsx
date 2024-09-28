import {Canvas} from "./components/Canvas.tsx";
import {ToolsSelection} from "./components/ToolsSelection.tsx";

/// <reference types="vite-plugin-svgr/client" />
function App() {

    return <div>
        <ToolsSelection/>
        <Canvas/>
    </div>
}

export default App
