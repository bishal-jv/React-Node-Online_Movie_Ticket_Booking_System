import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function callLoginAPI(e) {
        e.preventDefault();
        const location = "localhost";
        const data = {
            "email": email,
            "password": password
        }
        
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        try {
            //signin api call
            const fetchResponse = await fetch(`http://${location}:3000/users/login/`, settings);
            const data = await fetchResponse.json();

            
            
            if(data.token){
                sessionStorage.setItem('token', data.token);
                    navigate("/home");
            }
            else{
                window.confirm("Invalid Email / Password!");
            }

        }
        catch (e) {
            return e;
        }
    };

return (
    <div className="login">
      <div className="container">
        <title>Booking System</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        <div className="container main-container border border-2 border-secondary">
            <header className="row border-bottom border-2 border-secondary"><h3>Login Page</h3></header>
            <div className="row col-md-4 mx-auto">
                <form className ="align-self-sm-center m-5 pb-5 needs-validation mx-auto border" onSubmit={callLoginAPI}>
                    <div className="m-3 p-2">
                        <label className="form-label" htmlFor="email">Email:</label>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} id="email" name="email" className="form-control" placeholder="Enter the email" required/>
                    </div>

                    <div className="m-3 p-2">
                        <label className="form-label" htmlFor="password">Password: </label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" name="password" className="form-control" placeholder="Enter the password" required/> 
                    </div>

                    <div className="m-3 p-2">
                        <a href="/register" className="reglink">New Register</a>
                        <button type="submit" className="btn btn-primary">Login</button> 
                    </div>

                </form>
            </div>


        </div>
        
      </div>
    </div>
  );
}

export default Login;