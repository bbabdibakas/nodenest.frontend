import {createRoot} from "react-dom/client";
import './styles/index.scss'
import App from "./App";
import {BrowserRouter} from "react-router";

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}