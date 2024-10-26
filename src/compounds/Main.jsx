

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import { useState } from 'react';
import Signup from './signup';
import Login from './Login';

function Main() {
    const [inputvalue, setvalue] = useState([{ username: "sadaf", password: "0808" }, { username: "mahin", password: "0808" }])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login inputvalue={inputvalue} setvalue={setvalue} />}></Route>
                <Route path="/Signup" element={<Signup inputvalue={inputvalue} setvalue={setvalue} />}></Route>
                <Route path='/landing' element={<Landing></Landing>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Main