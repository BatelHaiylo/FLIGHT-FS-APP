import { Route, Routes } from "react-router-dom";
import {Home, PageError } from './route'

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="" element={<></>}/>
            <Route path="" element={<></>}/>
            <Route path="*" element={<PageError/>}/>
        </Routes>
    )
}