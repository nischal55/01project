import axios from "axios";
import { useState } from "react";

function AdminLogin() {

    const [emailpost,setEmail]=useState("");
    const [passwordpost,setPass]=useState("");


    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("https://api.escuelajs.co/api/v1/auth/login",{email : emailpost,password:passwordpost}).then((res)=>{if(res.data){console.log("logged in")}});
        console.log(emailpost)
        console.log(passwordpost)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Email">Email</label><br />
                <input type="email" onChange={(e)=> setEmail(e.target.value)}  /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" onChange={(e)=>{setPass(e.target.value)}} /><br/><br/>

                <input type="submit" className="btn btn-primary"  value={"Login"}/>
            </form>
        </>
    );
}

export default AdminLogin;