import {createRoot} from "react-dom/client";
import 'app/styles/index.scss'
import App from "app/App";
import {BrowserRouter} from "react-router";
import {StoreProvider} from "app/providers/StoreProvider";

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <StoreProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </StoreProvider>
    )
}