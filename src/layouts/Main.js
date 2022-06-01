import  { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home from "../pages/Home";

/**
 * Main component in order to create a single page application
 * @returns 
 */

function Main() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main;