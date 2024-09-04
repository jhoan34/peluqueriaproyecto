import { useState } from "react";
import { Login } from "../components/login";
import { Register } from "../components/register";
import "./user.css";

export const User = () => {
    const [login, setLogin] = useState(true);    
    return (
        <div className="user">
            {login ? <Login setLogin={setLogin}/> : <Register setLogin={setLogin}/>}
        </div>
    );
};
