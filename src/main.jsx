import ReactDom from "react-dom/client"
import App from "./App"
import './index.css'


import'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle.min.js'
import"@fortawesome/fontawesome-free/css/all.min.css"

let rootElement = ReactDom.createRoot(document.getElementById("root"))
rootElement.render(<App/>)
 