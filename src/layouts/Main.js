import  { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home from "../pages/Home";

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