import {React, useState } from "react";
import { useNavigate} from "react-router-dom";

function Dashboard(){
    const userLogged = JSON.parse(localStorage.getItem("userdata"));

    return(
        <div>
            <h1> HEllo I am Dashboard</h1>
        </div>
    )
}
export default Dashboard;