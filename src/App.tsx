import { FC } from "react"
import Router from "./Router"

import "./assets/styles/reset.css"
import "./assets/styles/style.css"

const App: FC = () => {
    return (
        <div className="App">
            <Router />
        </div>
    )
}

export default App