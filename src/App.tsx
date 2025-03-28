import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Cart from "./components/Cart/Cart";
import {BookList} from "./pages/BookList/BookList";
import {NotFound} from "./pages/NotFound/NotFound";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/books" element={<BookList/>}/>

                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
